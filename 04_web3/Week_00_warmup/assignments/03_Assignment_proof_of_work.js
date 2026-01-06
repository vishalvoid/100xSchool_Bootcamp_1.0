const crypto = require("crypto");

const findHashwithprefix = (text, prefix) => {
  let input = 0;

  while (true) {
    const hash = crypto
      .createHash("sha256")
      .update(text + input.toString())
      .digest("hex");

    if (hash.startsWith(prefix)) {
      return { Input: text + input.toString(), hash: hash };
    }
    input++;
  }
};

const inputString = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`;

const result = findHashwithprefix(inputString, "0000");
console.log(result);

// Question :
// What if I ask you to find a nonce for the following input -
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
