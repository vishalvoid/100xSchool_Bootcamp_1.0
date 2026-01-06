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
