// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  // will thorw all keys.
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // will throw all values.
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // will thow an arrray with each elements as arrays.
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // I can check if there is any property of now.
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // let's us add new value to the existing objects.
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
