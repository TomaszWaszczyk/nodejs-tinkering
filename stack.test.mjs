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

test('Stack push operations', async (t) => {
  const stack = new Stack();
  
  await t.test('push first item', () => {
    stack.push('a');
    assert.strictEqual(stack.isEmpty(), false);
    assert.strictEqual(stack.size(), 1);
    assert.strictEqual(stack.peek(), 'a');
  });

  await t.test('push second item', () => {
    stack.push('b');
    assert.strictEqual(stack.size(), 2);
    assert.strictEqual(stack.peek(), 'b');
  });
});
