import { assert } from 'chai';

import { SeededNoise } from "../src/SeededNoise.js";

const rng = new SeededNoise();
const tries = 50;

describe("random", function() {

  it('returns unique random values between 0 and 1', function() {
    const nums = new Set();

    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      nums.add(rng.random())
    }

    // if unique, size will equal number of tries
    assert.equal(nums.size, tries)

    // check value range
    for (let n of nums) {
      assert.ok(n >= 0 && n <= 1)
    }
  });

  it('returns unique random values between 0 and 5', function() {
    const nums = new Set();

    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      nums.add(rng.random(5))
    }

    // if unique, size will equal number of tries
    assert.equal(nums.size, tries)

    // check value range
    for (let n of nums) {
      assert.ok(n >= 0 && n <= 5)
    }
  });

  it('returns unique random values between 5 and 10', function() {
    const nums = new Set();

    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      nums.add(rng.random(5, 10))
    }

    // if unique, size will equal number of tries
    assert.equal(nums.size, tries)

    // check value range
    for (let n of nums) {
      assert.ok(n >= 5 && n <= 10)
    }
  });
});