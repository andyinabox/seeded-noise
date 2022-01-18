// import { describe, it, expect, beforeEach, afterEach } from "concise-test";
import assert from 'assert';

import { SeededNoise } from "../src/SeededNoise.js";

const rng = new SeededNoise();
const tries = 50;

describe("random", () => {

  it('returns unique random values between 0 and 1', () => {
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

  it('returns unique random values between 0 and 5', () => {
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

  it('returns unique random values between 5 and 10', () => {
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