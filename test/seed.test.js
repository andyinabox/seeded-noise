import { assert } from 'chai';

import { SeededNoise } from "../src/SeededNoise.js";

describe('seed', function() {

  it('produces different random result when no seed is provided in constructor', function() {
    const rng1 = new SeededNoise();
    const rando1 = rng1.random();
    const rng2 = new SeededNoise();
    const rando2 = rng2.random();
    assert.notEqual(rando2, rando1);
  })

  it('produces the same random result with identical seed', function() {
    const rng1 = new SeededNoise('test');
    const rando1 = rng1.random();
    const rng2 = new SeededNoise('test');
    const rando2 = rng2.random();
    assert.equal(rando2, rando1);
  })

  it('produces different random result with different seed', function() {
    const rng1 = new SeededNoise('test');
    const rando1 = rng1.random();
    const rng2 = new SeededNoise('different');
    const rando2 = rng2.random();
    assert.notEqual(rando2, rando1);
  })

  it('produces same noise value when same seed and input are used', function() {
    const rng1 = new SeededNoise('test');
    const rando1 = rng1.noise([1, 2, 3]);
    const rng2 = new SeededNoise('test');
    const rando2 = rng2.noise([1, 2, 3]);
    assert.equal(rando2, rando1);
  })

  it('produces different noise value when same seed and different input are used', function() {
    const rng1 = new SeededNoise('test');
    const rng2 = new SeededNoise('test');
    assert.notEqual(rng1.noise([1, 2, 3]), rng2.noise([1, 2, 4]));
  })

  it('produces different noise value when different seed and same input are used', function() {
    const rng1 = new SeededNoise('test');
    const rng2 = new SeededNoise('different seed');
    assert.notEqual(rng1.noise([1, 50]), rng2.noise([1, 2]));
    assert.notEqual(rng1.noise([1, 50, 100]), rng2.noise([1, 50, 100]));
    assert.notEqual(rng1.noise([1, 50, 100, 500]), rng2.noise([1, 50, 100, 500]));
  })
})