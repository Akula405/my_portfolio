// Exercise the real route with a mocked email provider; never send test emails.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const Module = require("node:module");
const ts = require("typescript");
const compiled = ts.transpileModule(fs.readFileSync("app/api/contact/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const route = new Module("contact-test");
route._compile(compiled, "contact-test.cjs");
const { POST } = route.exports;
const savedFetch = global.fetch;
const savedKey = process.env.RESEND_API_KEY;
const savedFrom = process.env.CONTACT_FROM_EMAIL;
const savedTo = process.env.CONTACT_TO_EMAIL;
const valid = { name: "Test Visitor", email: "visitor@example.com", message: "A test message.", website: "" };
const request = (body, origin = "http://localhost:3000") => new Request("http://localhost:3000/api/contact", {
  method: "POST", headers: { "Content-Type": "application/json", origin }, body: JSON.stringify(body),
});

(async () => {
  let calls = 0;
  global.fetch = async () => { calls++; throw new Error("Unexpected provider call"); };
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;
  assert.equal((await POST(request(valid))).status, 503);
  assert.equal((await POST(request({ ...valid, email: "invalid" }))).status, 400);
  assert.equal((await POST(request({ ...valid, message: " " }))).status, 400);
  assert.equal((await POST(request({ ...valid, website: "spam" }))).status, 400);
  assert.equal((await POST(request({ ...valid, name: "Injected\r\nHeader" }))).status, 400);
  assert.equal((await POST(request(valid, "https://another-site.example"))).status, 403);
  assert.equal((await POST(request({ ...valid, message: "x".repeat(25000) }))).status, 413);
  assert.equal((await POST(new Request("http://localhost:3000/api/contact", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "{broken",
  }))).status, 400);
  assert.equal(calls, 0);
  process.env.RESEND_API_KEY = "test-only";
  process.env.CONTACT_FROM_EMAIL = "Portfolio <sender@example.com>";
  process.env.CONTACT_TO_EMAIL = "owner@example.com";
  global.fetch = async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    const body = JSON.parse(options.body);
    assert.deepEqual(body.to, ["owner@example.com"]);
    assert.equal(body.from, "Portfolio <sender@example.com>");
    assert.equal(body.reply_to, valid.email);
    assert.ok(body.text.includes(valid.message));
    assert.equal(options.headers.Authorization, "Bearer test-only");
    return Response.json({ id: "mock-message" });
  };
  assert.deepEqual(await (await POST(request({ ...valid, to: "attacker@example.com" }))).json(), { success: true });
  global.fetch = async () => Response.json({ error: "provider private detail" }, { status: 429 });
  const rejected = await POST(request(valid));
  assert.equal(rejected.status, 502);
  assert.ok(!(await rejected.text()).includes("provider private detail"));
  global.fetch = async () => { throw new Error("network failure"); };
  assert.equal((await POST(request(valid))).status, 502);
  global.fetch = async () => Response.json({});
  assert.equal((await POST(request(valid))).status, 502);
  console.log("Contact route: validation, origin, body limits, honeypot, configuration, delivery payload, provider errors and network failures passed.");
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => {
  global.fetch = savedFetch;
  for (const [key, value] of [["RESEND_API_KEY", savedKey], ["CONTACT_FROM_EMAIL", savedFrom], ["CONTACT_TO_EMAIL", savedTo]]) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
});
