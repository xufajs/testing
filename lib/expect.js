const assert = require('node:assert');

function expect(actual) {
  return {
    toNotBe(expected) {
      assert.notStrictEqual(actual, expected);
    },
    toBe(expected) {
      assert.strictEqual(actual, expected);
    },
    toBeGreaterThan(expected) {
      assert.ok(actual > expected);
    },
    toBeLessThan(expected) {
      assert.ok(actual < expected);
    },
    toBeGreaterThanOrEqual(expected) {
      assert.ok(actual >= expected);
    },
    toBeLessThanOrEqual(expected) {
      assert.ok(actual <= expected);
    },
    toBeNull() {
      assert.strictEqual(actual, null);
    },
    toEqual(expected) {
      assert.deepStrictEqual(actual, expected);
    },
    toNotEqual(expected) {
      assert.notDeepStrictEqual(actual, expected);
    },
    toBeDefined() {
      assert.notStrictEqual(actual, undefined);
    },
    toBeUndefined() {
      assert.strictEqual(actual, undefined);
    },
    toBeTruthy() {
      assert.ok(actual);
    },
    toBeFalsy() {
      assert.ok(!actual);
    },
    toBeInstanceOf(expected) {
      assert.ok(actual instanceof expected);
    },
    toHaveLength(expected) {
      assert.strictEqual(actual.length, expected);
    },
    async toThrow(expected) {
      try {
        await actual();
        assert.fail('Function did not throw');
      } catch (error) {
        assert.strictEqual(error.message, expected);
      }
    },
    toBeNaN() {
      assert.ok(Number.isNaN(actual));
    },
    toBeCloseTo(expected, precision = 2) {
      if (actual === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
        return true;
      }
      if (actual === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
        return true;
      }
      const expectedDiff = 10 ** -precision / 2;
      const receivedDiff = Math.abs(actual - expected);
      return assert.ok(receivedDiff < expectedDiff);
    },
    toNotBeCloseTo(expected, precision = 2) {
      if (actual === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
        return true;
      }
      if (actual === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
        return true;
      }
      const expectedDiff = 10 ** -precision / 2;
      const receivedDiff = Math.abs(actual - expected);
      return assert.ok(receivedDiff >= expectedDiff);
    },
  };
}

module.exports = { expect };
