const crypto = require("crypto");

const findhashwithprefix = (prefix) => {
  let input = 0;
  while (true) {
    const hash = crypto
      .createHash("sha256")
      .update(input.toString())
      .digest("hex");

    if (hash.startsWith(prefix)) {
      return { Input: input, Hash: hash };
    }

    input++;
  }
};

// Function to find an input string that produces a hash starting with '00000'
const result = findhashwithprefix("00000");
console.log(result);

// Question :

// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000
