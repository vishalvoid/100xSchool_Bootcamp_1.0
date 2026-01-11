function mathMethods(value) {
  console.log("Original Value:", value);

  // it will throw rounded off to that number
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // will throw largest integer thaan that number.
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // will throw smallest integer to that number.
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Will thorw anything random
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // with throw the max of these numebrs.
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  // will throw the minimum of these numebrs.
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  //   will throw the power of fiven argunment
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  // will throw th square root of given argunment
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
