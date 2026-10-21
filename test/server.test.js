const test = require('node:test');
const assert = require('node:assert/strict');

const { createServer } = require('../src/server');

async function request(server, path) {
  const address = server.address();
  return fetch(`http://127.0.0.1:${address.port}${path}`);
}

test('delivers the canonical greeting on the primary presentation surface', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());

  const response = await request(server, '/');
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /id="canonical-greeting"/);
  assert.match(body, /All systems operational/);
  assert.match(body, /Diagnostic Bootstrap Sequence/);
  assert.match(body, /Validating approved greeting policy/);
  assert.match(body, /Approved greeting cleared for global delivery/);
  assert.match(body, /Final response presentation/);
  assert.equal((body.match(/'PASS'|'APPROVED'/g) || []).length, 50);
  assert.match(body, /boot.classList.add\('exiting'\)/);
});

test('provides a comprehensive diagnostic contract for senior stakeholders', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());

  const response = await request(server, '/diagnostics');
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.overallStatus, 'operational');
  assert.equal(body.subsystems.length, 5);
  assert.equal(body.subsystems[0].name, 'Global Edge Greeting Delivery');
  assert.equal(body.canonicalGreeting, body.canonicalGreeting.trim());
  assert.ok(body.canonicalGreeting.length > 0);
});

test('reports a healthy greeting platform to automated operators', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());

  const response = await request(server, '/health');

  assert.equal(response.status, 200);
  const payload = await response.json();
  assert.equal(payload.status, 'operational');
  assert.equal(typeof payload.greeting, 'string');
  assert.equal(payload.responseFidelity, '100%');
});

test('exports observability metrics for the greeting reliability team', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());

  const response = await request(server, '/metrics');
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /greeting_response_fidelity_ratio 1/);
});
