import { assert } from 'chai';

import { SeededNoise } from "../src/SeededNoise.js";
import { SimplexNoise } from "simplex-noise";

const rng = new SeededNoise();
const tries = 50;

describe("noise", () => {


  it('returns identical values when given identical input', () => {
    const nums = new Set();

    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      nums.add(rng.noise([1, 2, 3]))
    }

    assert.equal(nums.size, 1);
  });

  it('returns noise values between 0 and 1 when given different input', () => {
    const nums = new Set();
    let rand;
    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      rand = rng.noise([1, 2, i]);
      assert.isAtLeast(rand, 0);
      assert.isAtMost(rand, 1);
    }
  });

  it('returns noise values between 0 and 5 when given different input', () => {
    const nums = new Set();
    let rand;
    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      rand = rng.noise([1, 2, i], 5);
      assert.isAtLeast(rand, 0);
      assert.isAtMost(rand, 5);
    }
  });

  it('returns noise values between 5 and 10 when given different input', () => {
    const nums = new Set();
    let rand;
    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      rand = rng.noise([1, 2, i], 5, 10);
      assert.isAtLeast(rand, 5);
      assert.isAtMost(rand, 10);
    }
  });
});