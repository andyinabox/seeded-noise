import seedrandom from "seedrandom"
import SimplexNoise from "simplex-noise"

export class SeededNoise {
  #seed
  #simplex
  #rng

  constructor(seed = Math.random(), scale = 1) {
    this.scale = scale
    this.seed = seed
  }

  get seed() {
    return this.#seed
  }

  set seed(v) {
    this.#rng = seedrandom(v)
    this.#simplex = new SimplexNoise(this.rng)
    this.#seed = v
  }

  #random(rand, min, max) {
    if (typeof min !== 'number') {
      return rand
    }
    if (typeof max !== 'number') {
      return rand * min
    }
    if (min > max) {
      const tmp = min
      min = max
      max = tmp
    }
    return rand * (max - min) + min
  }

  random(min, max) {
    return this.#random(this.#rng(), min, max)
  }

  noise(components = [], min, max, scale) {

    if (!Array.isArray(components)) {
      throw new Error('first argument should be an array of 2, 3, or 4 numbers');
    }

    // get appropriate noise function (or throw error)
    const noiseFn = this.getNoiseFn(components.length)

    // use default scale if none is provided
    const s = (typeof scale !== 'number') ? this.scale : scale;
   
    // scale components 
    const c = components.map(c => c * s)

    // by default simplex-noise gives us a value from -1 to 1
    // map to be between 0 and 1 for consistency
    const rand = (noiseFn(...c) + 1) / 2;
    
    return this.#random(rand, min, max)
  }

  getNoiseFn(n) {
    if (n == 2) {
      return this.#simplex.noise2D.bind(this.#simplex)
    } else if (n == 3) {
      return this.#simplex.noise3D.bind(this.#simplex)
    } else if (n == 4) {
      return this.#simplex.noise4D.bind(this.#simplex)
    } else {
      throw new Error('invalid number of noise components: '+n)
    }
  }
}