import Stack from './stack.mjs';
import assert from 'node:assert';
import test from 'node:test';

test('addition works', () => {
  assert.strictEqual(1 + 1, 2);
});

test('Stack initialization', async (t) => {
  await t.test('new stack is empty', () => {
    const stack = new Stack();
    assert.strictEqual(stack.isEmpty(), true);
    assert.strictEqual(stack.size(), 0);
  });
});
