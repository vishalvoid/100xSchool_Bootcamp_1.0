// is a global function -> means we can call it anywhere. and it will work.
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt -> anything gibrish at the end. will work. but in starting will not work. then it will send NaN
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

// parses to the flotat. will parse - in decimals.
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
