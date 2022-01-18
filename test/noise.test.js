// import { describe, it, expect, beforeEach, afterEach } from "concise-test";
import assert from 'assert';

import { SeededNoise } from "../src/SeededNoise.js";
import { SimplexNoise } from "simplex-noise";

const rng = new SeededNoise();
const tries = 50;

describe("noise", () => {

  it('simplex-noise returns unique random values', () => {
    const simplex = new SimplexNoise();
    const nums = new Set();

    // add random numbers to set
    for (let i = 0; i < tries; i++) {
      nums.add(simplex.noise3D(1, 2, 3));
    }

    // if unique, this will be true
    assert.equal(nums.size, tries)
  });

//   it('returns unique random values between 0 and 1', () => {
//     const nums = new Set();

//     // add random numbers to set
//     for (let i = 0; i < tries; i++) {
//       nums.add(rng.noise([1, 2, 3]))
//     }

//     // if unique, this will be true
//     expect(nums.size).toBe(tries)

//     // check value range
//     for (let n of nums) {
//       expect(n >= 0 && n <= 1).toBe(true);
//     }
//   });

//   it('returns unique random values between 0 and 5', () => {
//     const nums = new Set();

//     // add random numbers to set
//     for (let i = 0; i < tries; i++) {
//       nums.add(rng.noise([1, 2, 3], 5))
//     }

//     // if unique, this will be true
//     expect(nums.size).toBe(tries)

//     // check value range
//     for (let n of nums) {
//       expect(n >= 0 && n <= 5).toBe(true);
//     }
//   });

//   it('returns unique random values between 5 and 10', () => {
//     const nums = new Set();

//     // add random numbers to set
//     for (let i = 0; i < tries; i++) {
//       nums.add(rng.noise([1, 2, 3], 5, 10))
//     }

//     // if unique, this will be true
//     expect(nums.size).toBe(tries)

//     // check value range
//     for (let n of nums) {
//       expect(n >= 5 && n <= 10).toBe(true);
//     }
//   });
});