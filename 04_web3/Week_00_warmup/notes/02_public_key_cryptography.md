# Public Key Cryptography & Wallet Creation

## Table of Contents

1. [Banks vs Blockchains](#banks-vs-blockchains)
2. [Bits, Bytes & Data Representation](#bits-and-bytes)
3. [Encodings Explained](#encodings)
4. [Hashing vs Encryption](#hashing-vs-encryption)
5. [Public Key Cryptography](#public-key-crypto)
6. [How Blockchain Transactions Work](#blockchain-transactions)
7. [HD Wallets & Seed Phrases](#hd-wallets)

***

## Banks vs Blockchains {#banks-vs-blockchains}

### How Traditional Banks Handle Authentication 🏦

**Simple and Centralized:**

```
Login Process:
1. Enter username: "john@email.com"
2. Enter password: "mySecurePassword123"
3. Bank verifies against their database
4. You're logged in! ✅
```

**What You Can Do:**

* View your balance
* Transfer money
* Check transaction history
* All controlled by the bank's servers

**The Problem:**

* Bank controls everything
* If bank's servers go down, you can't access funds
* Bank can freeze your account
* Need to trust the bank completely

***

### How Blockchains Handle Authentication&#x20;

**Decentralized and Cryptographic:**

Instead of username/password, blockchains use **Public-Private Key Pairs**.

```
Your Wallet:
├─ Public Key:  0xD9a657ACB3960DB92AaaA32942019bD3c473FCCB
│   (Like your bank account number - shareable)
│
└─ Private Key: a8f3b9c2d1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0
    (Like your password + PIN + signature - KEEP SECRET!)
```

**Key Differences:**

| Traditional Banks            | Blockchains                    |
| ---------------------------- | ------------------------------ |
| Username + Password          | Public + Private Keys          |
| Bank stores your credentials | You control your keys          |
| Bank can reset password      | Lost keys = Lost funds forever |
| Centralized control          | Decentralized ownership        |
| Trust required               | Trustless system               |

***

## Understanding Bits, Bytes & Data {#bits-and-bytes}

Before diving into cryptography, we need to understand how computers store and represent data.

### What is a Bit?&#x20;

**Definition:** The smallest unit of data in computing.

**Values:** Only 0 or 1 (like a light switch: OFF or ON)

```
Examples:
0 = OFF, False, No
1 = ON, True, Yes
```

**Think of it like:**
A single light bulb that's either off (0) or on (1).

***

### What is a Byte?&#x20;

**Definition:** A group of 8 bits.

**Why 8?** It's the standard unit that represents one character.

```
1 Byte = 8 Bits

Example:
Bit sequence: 0 1 0 0 1 0 0 0
Positions:    7 6 5 4 3 2 1 0
```

**How many values?** 2^8 = 256 possible values (0 to 255)

***

### Practice: Binary to Decimal Conversion

**Question:** Convert `11001010` to decimal.

**Solution:**

```
Binary:    1  1  0  0  1  0  1  0
Position:  7  6  5  4  3  2  1  0
Value:   128 64  0  0  8  0  2  0

Calculation:
128 + 64 + 8 + 2 = 202

Answer: 202 ✅
```

***

### Representing Data in JavaScript

#### Single Bit (as number)

```JavaScript
const bit = 0; // or 1
console.log(bit);
```

#### Single Byte

```JavaScript
const byte = 202; // Value between 0-255
console.log(byte);
```

#### Array of Bytes

```JavaScript
const bytes = [202, 244, 1, 23];
console.log(bytes);
// Output: [202, 244, 1, 23]
```

***

### UInt8Array ? &#x20;

**What is it?** A typed array that stores 8-bit unsigned integers (0-255).

```JavaScript
let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes);
// Output: Uint8Array(4) [0, 255, 127, 128]
```

**Why use UInt8Array over regular arrays?**

1. **Memory Efficient:**

   * Regular array: Each number takes 64 bits (8 bytes)
   * UInt8Array: Each value takes 8 bits (1 byte)
   * **8x less memory!**

2. **Type Safety:**

   * Automatically enforces 0-255 range
   * Prevents invalid values

3. **Performance:**
   * Faster operations
   * Better for cryptographic operations

***

### Practice: What Happens Here?

```JavaScript
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300; // What happens?

console.log(uint8Arr[1]);
```

**Answer:** It wraps around! `300 % 256 = 44`

* No error thrown
* Value becomes 44
* This is called "modulo wrapping"

***

## Encodings Explained {#encodings}

Raw bytes like `00101011101010101020` are unreadable. Encodings make data human-friendly!

### Why Do We Need Encodings?

**Problem:**

```
Your name in bytes: [72, 101, 108, 108, 111]
Not user-friendly�
```

**Solution:** Encode bytes into readable formats!

```
ASCII: "Hello"
Hex: "48656c6c6f"
Base64: "SGVsbG8="
```

***

### ASCII Encoding&#x20;

**What:** American Standard Code for Information Interchange
**Characters:** 128 standard characters (0-127)
**Bits per character:** 7 bits (but usually stored in 8)

**Character Mapping:**

```
65 → 'A'
97 → 'a'
48 → '0'
32 → ' ' (space)
```

Full table: <https://www.w3schools.com/charsets/ref_html_ascii.asp>

#### Bytes to ASCII

```JavaScript
function bytesToAscii(byteArray) {
  return byteArray.map((byte) => String.fromCharCode(byte)).join("");
}

// Example:
const bytes = [72, 101, 108, 108, 111];
const ascii = bytesToAscii(bytes);
console.log(ascii); // Output: "Hello"
```

#### ASCII to Bytes

```JavaScript
function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Example:
const ascii = "Hello";
const bytes = asciiToBytes(ascii);
console.log(bytes); // Output: [72, 101, 108, 108, 111]
```

#### UInt8Array Version (Modern Way)

```JavaScript
// Bytes to ASCII
function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// ASCII to Bytes
function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}

const bytes = new Uint8Array([72, 101, 108, 108, 111]);
console.log(bytesToAscii(bytes)); // "Hello"
```

***

### Hexadecimal (Hex) Encoding

**What:** Base-16 numbering system
**Characters:** 0-9, A-F (16 total)
**Bits per character:** 4 bits

**Why use it?** Compact and commonly used in cryptography!

```
Decimal | Hex | Binary
--------|-----|--------
   0    |  0  |  0000
   5    |  5  |  0101
  10    |  A  |  1010
  15    |  F  |  1111111
```

#### Array to Hex

```JavaScript
function arrayToHex(byteArray) {
  let hexString = "";
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, "0");
  }
  return hexString;
}

const bytes = new Uint8Array([72, 101, 108, 108, 111]);
console.log(arrayToHex(bytes));
// Output: "48656c6c6f"
```

**Breakdown:**

```
72  → 0x48
101 → 0x65
108 → 0x6c
108 → 0x6c
111 → 0x6f
Result: "48656c6c6f"
```

#### Hex to Array

```JavaScript
function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

const hex = "48656c6c6f";
console.log(hexToArray(hex));
// Output: Uint8Array(5) [72, 101, 108, 108, 111]
```

***

### Base64 Encoding

**What:** Base-64 numbering system
**Characters:** A-Z, a-z, 0-9, +, / (64 total)
**Bits per character:** 1 character = 6 bits

**Use cases:**

* Email attachments
* Embedding images in HTML/CSS
* API data transfer

```JavaScript
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64 = Buffer.from(uint8Array).toString("base64");
console.log(base64); // Output: "SGVsbG8="
```

**Online tools:**

* Encode: <https://www.base64encode.org/>
* Decode: <https://www.base64decode.org/>

***

### Base58 Encoding

**What:** Like Base64, but more user-friendly
**Characters:** 58 characters (excludes confusing ones!)

**Excluded characters:**

* `0` (zero) - looks like `O`
* `O` (capital o) - looks like `0`
* `I` (capital i) - looks like `l`
* `l` (lowercase L) - looks like `I`

**Why?** Used in Bitcoin and blockchain addresses to avoid typos!

**Characters used:**

```
Uppercase: A-Z (except I, O)
Lowercase: a-z (except l)
Numbers: 1-9 (no 0)
Total: 58 characters
```

#### Encode to Base58

```JavaScript
const bs58 = require("bs58");

const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const base58String = bs58.encode(bytes);
console.log(base58String); // Output: Base58 encoded string
```

#### Decode from Base58

```JavaScript
const bs58 = require("bs58");

const base58 = "9Ajdvzr"; // Example
const bytes = bs58.decode(base58);
console.log(bytes); // Output: Uint8Array [72, 101, 108, 108, 111]
```

***

### ASCII vs UTF-8

**ASCII:**

* 7-bit encoding (128 characters)
* English characters only
* Limited to basic Latin alphabet

**UTF-8:**

* 1 to 4 bytes per character
* Supports ALL languages (Chinese, Arabic, Emoji, etc.)
* Backward compatible with ASCII
* Most websites use UTF-8

```JavaScript
// UTF-8 example
const emoji = "🚀";
const bytes = new TextEncoder().encode(emoji);
console.log(bytes); // Uint8Array [240, 159, 154, 128] (4 bytes!)
```

Full UTF-8 character list: <https://www.fileformat.info/info/charset/UTF-8/list.htm>

***

## Hashing vs Encryption {#hashing-vs-encryption}

Two fundamental concepts in cryptography - let's understand the difference!

### Hashing

**Definition:** One-way transformation of data into a fixed-size fingerprint.

**Key Characteristics:**

* ✅ **One-way:** Cannot reverse (irreversible)
* ✅ **Deterministic:** Same input = Same output
* ✅ **Fixed-size output:** Any input → Fixed-length hash
* ✅ **Collision-resistant:** Hard to find two inputs with same hash
* ❌ **No decryption:** Cannot get original data back

```
Input: "Hello World"
↓ [SHA-256 Hashing]
Output: "a591a6d40bf420404a011733cfb7b190..."

Input: "Hello World" (again)
↓ [SHA-256 Hashing]
Output: "a591a6d40bf420404a011733cfb7b190..." (same!)
```

**Common Algorithms:**

* SHA-256 (Bitcoin, Ethereum)
* SHA-3
* MD5 (deprecated - not secure!)

**Use Cases:**

* Password storage
* Data integrity verification
* Blockchain mining
* Digital signatures

***

### Encryption

**Definition:** Two-way transformation - can encrypt AND decrypt data.

**Key Characteristics:**

* ✅ **Reversible:** Can decrypt to get original data
* ✅ **Key-dependent:** Need the key to decrypt
* ✅ **Two types:** Symmetric and Asymmetric

```
Original: "Secret Message"
↓ [Encrypt with Key]
Encrypted: "x7k9mP2qL..."
↓ [Decrypt with Key]
Original: "Secret Message"
```

***

### Symmetric Encryption

**Concept:** Same key for encryption AND decryption.

```
        [Same Key]
           ↓
Plain Text → [Encrypt] → Cipher Text → [Decrypt] → Plain Text
```

**Analogy:** Like a padlock - same key locks and unlocks.

#### Code Example (AES-256)

```JavaScript
const crypto = require("crypto");

// Generate encryption key and IV
const key = crypto.randomBytes(32); // 256 bits
const iv = crypto.randomBytes(16); // Initialization vector

// Encrypt function
function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// Decrypt function
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Example usage
const original = "Hello, World!";
const encrypted = encrypt(original);
const decrypted = decrypt(encrypted);

console.log("Original:", original);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
```

**Pros:**

* Fast and efficient
* Good for large data

**Cons:**

* Key distribution problem (how to share the key securely?)
* If key is compromised, all data is compromised

***

### Asymmetric Encryption&#x20;

Asymmetric encryption, also known as public key cryptography, uses a pair of keys: a public key and a private key.

```
        [Public Key]          [Private Key]
           ↓                      ↑

        Plain Text → [Encrypt] → Cipher Text → [Decrypt] → Plain Text
```

**Concept:** Two different keys - Public Key and Private Key.

```Textile
 Hello ----(encryption + private key)---→ Encrypted Message -----(encryption + public key)---→ Hello
```

**Key Properties:**

* Mathematically related keys
* Impossible to derive private key from public key
* Encrypt with public, decrypt with private
* Also used for digital signatures!

***

## Public Key Cryptography Deep Dive {#public-key-crypto}

### Understanding Key Pairs&#x20;

**Public Key:**

* Can be shared with anyone
* Used to verify signatures
* Used to encrypt messages (for you)
* Like your email address or bank account number

**Private Key:**

* MUST be kept secret
* Used to sign transactions
* Used to decrypt messages
* Like your password, but MORE important!

**Example Ethereum Address:**

```
Public Key:  0xD9a657ACB3960DB92AaaA32942019bD3c473FCCB
Private Key: 8f3b9c2d1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0
```

⚠️ **CRITICAL:** If you lose your private key, you lose access forever. No recovery!

***

### Common Cryptographic Algorithms

#### RSA (Rivest–Shamir–Adleman)

* Older, widely used
* Larger key sizes (2048-4096 bits)
* Slower than elliptic curve

#### ECC (Elliptic Curve Cryptography)

* Modern, efficient
* Smaller keys, same security
* Faster operations
* Used in most blockchains

**Popular Elliptic Curves:**

* **secp256k1** - Bitcoin and Ethereum
* **ed25519** - Solana, Stellar

#### ECDSA (Elliptic Curve Digital Signature Algorithm)

* Bitcoin
* Ethereum
* Based on secp256k1 curve

#### EdDSA (Edwards-curve Digital Signature Algorithm)

* Solana
* Faster than ECDSA
* Based on ed25519 curve

**Learn more:** <https://www.youtube.com/watch?v=NF1pwjL9-DE>

***

### Real-World Use Cases

1. **SSL/TLS Certificates** (HTTPS websites)

   * Secure web browsing
   * Protects data in transit

2. **SSH Keys** (Server access)

   * Connect to servers securely
   * Push code to GitHub

3. **Blockchains & Cryptocurrencies**

   * Sign transactions
   * Prove ownership
   * Secure wallets

4. **Email Encryption** (PGP/GPG)
   * Secure email communication

***

### Creating Key Pairs - Practical Examples

1. Create a public-private key pair
2. define a message to sign
3. convert message to UInt8Array
4. sign the message with private key
5. verify the signature with public key

#### Method 1: Using @noble/ed25519 (Solana-style)

```JavaScript
import * as ed from "@noble/ed25519";

async function main() {
  // Generate private key
  const privKey = ed.utils.randomPrivateKey();

  // Derive public key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Message to sign
  const message = new TextEncoder().encode("hello world");

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  console.log("Valid signature:", isValid); // true
}

main();
```

***

#### Method 2: Using @solana/web3.js

```JavaScript
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate keypair
const keypair = Keypair.generate();

// Extract keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;

console.log("Public Key:", publicKey);
console.log("Private Key:", secretKey);

// Sign a message
const message = new TextEncoder().encode("hello world");
const signature = nacl.sign.detached(message, secretKey);

// Verify signature
const isValid = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log("Signature valid:", isValid); // true
```

***

#### Method 3: Using @noble/secp256k1 (Ethereum-style)

```JavaScript
import * as secp from "@noble/secp256k1";

async function main() {
  // Generate private key
  const privKey = secp.utils.randomPrivateKey();

  // Derive public key
  const pubKey = secp.getPublicKey(privKey);

  // Hash of message (SHA-256 of "hello world")
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";

  // Sign the hash
  const signature = await secp.signAsync(msgHash, privKey);

  // Verify signature
  const isValid = secp.verify(signature, msgHash, pubKey);

  console.log("Valid signature:", isValid); // true
}

main();
```

***

#### Method 4: Using ethers.js

```JavaScript
import { ethers } from "ethers";

// Generate random wallet
const wallet = ethers.Wallet.createRandom();

// Extract keys
const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Address:", publicKey);
console.log("Private Key:", privateKey);

// Sign a message
const message = "hello world";
const signature = await wallet.signMessage(message);

console.log("Signature:", signature);

// Verify signature
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);
console.log("Valid:", recoveredAddress === publicKey); // true
```

***

## How Blockchain Transactions Work {#blockchain-transactions}

Let's understand the complete flow of a blockchain transaction!

**Interactive Demo:** <https://andersbrownworth.com/blockchain/>

### User Side (Creating & Signing Transaction) 📝

**Step 1: Generate Key Pair**

```JavaScript
// User creates their wallet
const wallet = generateKeyPair();
// Public Key: 0xABC123...
// Private Key: secret123...
```

**Step 2: Create Transaction**

```JavaScript
const transaction = {
  from: "0xYourPublicKey",
  to: "0xAlicePublicKey",
  amount: 50,
  timestamp: Date.now(),
  latestBlockHash: "0xabc123...", // Blockchain-specific
};
```

**Step 3: Hash the Transaction**

```JavaScript
const txHash = SHA256(JSON.stringify(transaction));
// Output: "d4f2c9a8b1..."
```

**Step 4: Sign the Hash**

```JavaScript
const signature = signWithPrivateKey(txHash, privateKey);
// This proves YOU authorized this transaction
```

**Step 5: Broadcast to Network**

```JavaScript
broadcast({
  transaction: transaction,
  signature: signature,
  publicKey: publicKey,
});
```

***

### Miner/Validator Side (Verification) ✅

**Step 1: Receive Transaction**

```JavaScript
const { transaction, signature, publicKey } = receivedData;
```

**Step 2: Hash the Transaction**

```JavaScript
const computedHash = SHA256(JSON.stringify(transaction));
// Should match the hash user signed
```

**Step 3: Verify Signature**

```JavaScript
const isValidSignature = verifySignature(signature, computedHash, publicKey);

if (!isValidSignature) {
  reject("Invalid signature!");
}
```

**Step 4: Validate Transaction**

```JavaScript
// Check various conditions:
- Does user have sufficient balance?
- Is the transaction format valid?
- Is the nonce correct?
- Are blockchain-specific params valid?
```

**Step 5: Add to Block**

```JavaScript
if (allChecksPass) {
  addTransactionToBlock(transaction);
  mineBlock(); // Proof of Work
  broadcastBlock();
}
```

***

### Complete Transaction Flow Diagram

```
USER CREATES TRANSACTION
        ↓
Generate Public/Private Keys
        ↓
Create Transaction Details
        ↓
Hash Transaction
        ↓
Sign Hash with Private Key
        ↓
Send: [Transaction + Signature + Public Key]
        ↓
    NETWORK
        ↓
MINER RECEIVES
        ↓
Re-hash Transaction
        ↓
Verify Signature with Public Key
        ↓
Validate Transaction Rules
        ↓
Add to Block (if valid)
        ↓
Mine Block (Proof of Work)
        ↓
Broadcast to Network
        ↓
TRANSACTION CONFIRMED ✅
```

***

## HD Wallets & Seed Phrases {#hd-wallets}

### The Problem with Multiple Wallets 😓

**Scenario:** You want multiple wallet addresses (for privacy, organization, etc.)

**Old Method:**

```
Wallet 1: Private Key 1, Public Key 1
Wallet 2: Private Key 2, Public Key 2
Wallet 3: Private Key 3, Public Key 3
...
Wallet 10: Private Key 10, Public Key 10
```

**Problems:**

* Need to backup 10 different private keys
* Lose one key = lose that wallet
* Very inconvenient
* Error-prone

***

### The Solution: HD Wallets 🌳

**HD = Hierarchical Deterministic**

**Concept:** Generate unlimited wallets from a single master seed!

```
        One Master Seed
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
Wallet 1  Wallet 2  Wallet 3  ... Wallet ∞
```

**Benefits:**

* Backup once (just the seed phrase)
* Generate unlimited addresses
* Deterministic (same seed = same wallets)
* Portable between different wallet apps

***

### BIP-32: The Standard

**BIP = Bitcoin Improvement Proposal**

**Proposed by:** Pieter Wuille (2012)

**What it does:**

* Defines how to derive child keys from parent keys
* Creates hierarchical tree structure
* Standardizes wallet recovery

**Tree Structure:**

```
Master Seed
    ↓
Master Key
    ↓
├─ Account 0
│  ├─ Address 0
│  ├─ Address 1
│  └─ Address 2
├─ Account 1
│  ├─ Address 0
│  └─ Address 1
└─ Account 2
   └─ Address 0
```

***

### Mnemonic Phrases (BIP-39) 🔤

**What:** Human-readable words that represent your seed.

**Standard:** 12 or 24 words from a predefined list

**Example:**

```
witch collapse practice feed shame open despair
creek road again ice least
```

**Word List:** 2048 English words defined in BIP-39
Full list: <https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt>

#### Generating a Mnemonic

```JavaScript
import { generateMnemonic } from "bip39";

// Generate 12-word mnemonic
const mnemonic = generateMnemonic();
console.log("Mnemonic:", mnemonic);
// Output: "witch collapse practice feed shame open despair creek road again ice least"
```

**Real Implementation:**

* Backpack wallet: <https://github.com/coral-xyz/backpack/blob/master/packages/app-extension/src/components/common/Account/MnemonicInput.tsx#L143>

⚠️ **SECURITY:**

* Write down on paper (not digital)
* Store in secure location
* Never share with anyone
* Lost mnemonic = Lost all wallets forever

***

### From Mnemonic to Seed 🌱

The mnemonic is converted to a binary seed (the actual key material).

```JavaScript
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// Generate mnemonic
const mnemonic = generateMnemonic();
console.log("Mnemonic:", mnemonic);

// Convert to seed (binary)
const seed = mnemonicToSeedSync(mnemonic);
console.log("Seed:", seed);
// Output: <Buffer 8f 3a 9c 2d 1e 4f 5a 6b ...>
```

This seed is used to derive all your wallets!

**Reference:** <https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/keyring.ts#L131>

***

### Derivation Paths 🛤️

**What:** A standardized path to generate specific wallets from your seed.

**Format:** `m / purpose' / coin_type' / account' / change / address_index`

**Breaking it down:**

```
m/44'/501'/0'/0'
│  │   │   │  │
│  │   │   │  └─ Address index (0, 1, 2, ...)
│  │   │   └──── Change (0=receiving, 1=change)
│  │   └──────── Account number (0, 1, 2, ...)
│  └──────────── Coin type (501=Solana, 60=Ethereum, 0=Bitcoin)
└─────────────── Purpose (44=BIP44 standard)
```

**Common Coin Types:**

```
0   = Bitcoin (BTC)
60  = Ethereum (ETH)
501 = Solana (SOL)
```

**The apostrophe (')** means "hardened derivation" (more secure).

***

### Complete HD Wallet Example

```JavaScript
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

// Step 1: Generate mnemonic
const mnemonic = generateMnemonic();
console.log("Mnemonic:", mnemonic);

// Step 2: Convert to seed
const seed = mnemonicToSeedSync(mnemonic);

// Step 3: Derive multiple wallets
console.log("\nDerived Wallets:");
for (let i = 0; i < 4; i++) {
  // Derivation path for Solana
  const path = `m/44'/501'/${i}'/0'`;

  // Derive keys from path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();

  console.log(`Wallet ${i}: ${publicKey}`);
}
```

**Output Example:**

```
Mnemonic: witch collapse practice feed shame open...

Derived Wallets:
Wallet 0: 7xKH5JQJ9LkRbEVZ9z8zGqK4kVqNqK3Lx...
Wallet 1: 9mP2qL8kH3nJ5uW2vB4oX7rY1cT6fN8k...
Wallet 2: 4fA1bC2dE3gH4iJ5kL6mN7oP8qR9sT0u...
Wallet 3: 2xY9zW8vU7tS6rQ5pO4nM3lK2jI1hG0f...
```

**Same mnemonic = Same wallets, every time!** This allows wallet portability.

***

### Wallet Portability Example

```
         Same Mnemonic
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
Phantom   Backpack   Solflare
    ↓         ↓         ↓
Same Wallet Addresses!
```

This is why you can import your Phantom wallet into Backpack using the same seed phrase!

**Solana Reference:**

* Config: <https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/blockchain-configs/solana/config.ts#L38>
* Util: <https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/util.ts#L22>

***

## Key Takeaways 🎯

### Authentication Models

1. **Traditional Banks:**

   * Username + Password
   * Centralized control
   * Password recovery possible
   * Trust required

2. **Blockchains:**
   * Public + Private Keys
   * Decentralized ownership
   * No recovery if keys lost
   * Trustless system

### Cryptographic Concepts

1. **Hashing:** One-way, fixed-size fingerprint
2. **Symmetric Encryption:** Same key for encrypt/decrypt
3. **Asymmetric Encryption:** Public key (share) + Private key (secret)
4. **Digital Signatures:** Prove authenticity without revealing private key

### Wallet Technology

1. **Key Pairs:** Public (shareable) + Private (secret)
2. **HD Wallets:** One seed → Unlimited wallets
3. **Mnemonic:** 12/24 words = Your master seed
4. **Derivation Paths:** Standardized way to generate wallets

