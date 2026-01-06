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

const result = findHashwithprefix("100xdevs", "00000");
console.log(result);
