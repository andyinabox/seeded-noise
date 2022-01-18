import { SeededNoise } from "../src/SeededNoise.js";
import assert from 'assert';

const rng = new SeededNoise();

describe("errors", () => {

  it('throws error if noise input is not array', () => {
    assert.throws(() => rng.noise({}), Error);
  });

  it('throws error if noise input array only has one entry', () => {
    assert.throws(() => rng.noise([1]), Error);
  });

  it('throws error if noise input array has 5 entries', () => {
    assert.throws(() => rng.noise([1, 2, 3, 4, 5]), Error);
  });

});