# Seeded Noise

The goal is to have a way of generating reproducable psuedorandom numbers and noise values with an easy-to-use API.

Really this is an API wrapper for two other libraries: 

 - [seedrandom](https://www.npmjs.com/package/seedrandom) which will simply generate a random number based on a given seed
 - [simplex-noise](https://www.npmjs.com/package/simplex-noise) which uses an instance of `seedrandom` to generate numbers using simplex noise (similar to Perlin noise)

## Usage

```js
import { SeededNoise } from 'seeded-noise'

const seed = 123;
const rng = new SeededNoise(seed);

// get a random number between 0 and 1
let rando = rng.random();

// get a random float between 0 and 5
// using the 3d simplex noise algorithm
let noise = rng.noise([1, 2, 3], 0, 5)

// this should yield the same result as
// above because we used the same seed
const rng2 = new SeededNoise(seed);
let rando2 = rng2.random();

```

## API

### `new SeededRandom([seed], [scale])`

The constructor takes 2 arguments:

 - `seed` _(optional)_ will set the seed value for all random numbers. Default is the result of `Math.random()`.
 - `scale` _(optional)_ sets a default value for the noise scale. Default is 1.

### `random([min], [max])`

The API for `random` is similar to the [p5.js `random()` function](https://p5js.org/reference/#/p5/random). 

 - `min` _(optional)_:
   - if 2 arguments are provided it will set the minimum value of the output range
   - if 1 argument is provided it will set the maximum value of an output range starting with 0
 - `max` _(optional)_ will set the maximum value of the output range

If no argumants are provided then this method will return a number between 0 and 1.

#### Examples

```js
// return a random number between 0 and 1
rng.random();

// return a random number between 0 and 5
rng.random(5);

// return a random number between 5 and 10
rng.random(5, 10);

```


### `noise(input, [min], [max], [scale])`

The `noise` method works similar to the `random` method, but also requires an array of 2-4 numbers as its first argument.

 - `input` _(required)_ is an array containing 2, 3, or 4 numbers that will be used as the basis for the noise result
 - `min` _(optional)_ same as above
 - `max` _(optional)_ same as above
 - `scale` _(optional)_ will set the scale of the noise results


#### Examples

```js

// return value between 0 and 1 using 2d simplex noise
rng.noise([1, 2]);

// 3d noise
rng.noise([3, 4, 5]);

// 4d noise
rng.noise([6, 7, 8, 9]);

// 3d noise value between 0 and 5
rng.noise([3, 4, 5], 5);

// 3d noise value between 5 and 10
rng.noise([3, 4, 5], 5, 10);

// 3d noise value between 0 and 1, scaled up to 10
rng.noise([3, 4, 5], 0, 1, 10);
```