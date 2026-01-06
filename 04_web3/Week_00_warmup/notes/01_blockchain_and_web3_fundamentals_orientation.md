# Blockchain & Web3 Fundamentals

## Table of Contents

1. [Why Do We Need Blockchains?](#why-blockchains)
2. [Understanding Hashing](#hashing)
3. [Introduction to Proof of Work](#proof-of-work)
4. [Creating a New Currency](#new-currency)

---

## Why Do We Need Blockchains? {#why-blockchains}

Before we dive into how blockchains work, let's understand the problems they're trying to solve.

### Problem 1: Currency Inflation

**What's happening?**
Governments print money constantly, which leads to inflation - meaning your money loses value over time.

**The Impact:**

- Prices of goods and services keep rising
- The same amount of money buys less over time
- Holding cash = losing purchasing power

**Example:** If you had $1000 in 2010, that same $1000 today buys significantly less due to inflation.

**Better Strategy:** Holding assets like:

- Gold
- Stocks
- Real Estate
- Bitcoin (store of value)

These tend to maintain or increase value better than fiat currencies (USD, INR, EUR, etc.)

---

### Problem 2: Fractional Reserve Banking

**The Shocking Truth:** Banks don't actually keep your money!

**How it works:**

1. You deposit $1000 in the bank
2. Bank keeps only ~10% ($100) in reserve
3. Bank lends out $900 to others
4. You still see $1000 in your account

**The Risk - Bank Runs:**
If everyone tries to withdraw their money at once, the bank won't have enough cash to pay everyone. This is called a "bank run."

**Real Example - Silicon Valley Bank (2022):**

- SVB collapsed in March 2023 (not 2022)
- Many Y Combinator startups had funds locked there
- Government had to bail them out
- Without bailout, hundreds of startups would have died

```
Your Deposit: $1000
├─ Bank Keeps: $100 (10%)
└─ Bank Lends: $900 (90%)
   └─ To other borrowers

Problem: If you want your $1000 back,
they only have $100 available!
```

---

### Problem 3: Bailouts & Financial Crises

**The 2008 Financial Crisis:**

**What Happened:**

1. Banks created risky financial products (mortgage-backed securities)
2. These products failed spectacularly
3. Banks lost massive amounts of money
4. Government bailed them out using **taxpayer money**

**The Unfairness:**

- Banks made risky bets to earn profits
- When they failed, taxpayers paid the price
- Bank executives often kept their bonuses
- Regular people lost homes, jobs, and savings

**Recommended Movie:** _The Big Short_ - explains the 2008 crisis brilliantly (watch it!)

---

### Problem 4: Currency Depreciation

Currencies lose value against other assets over time, especially in some countries.

**Examples:**

**Indian Rupee (INR):**

- Continuously depreciating against USD
- What cost ₹50 ten years ago might cost ₹100+ today

**Japanese Yen (JPY):**

- Even more severe depreciation
- Major concerns for Japanese economy

**Why This Matters:**
Your savings lose value just by sitting in the bank, even without touching them.

---

### Problem 5: Currencies Not Backed by Assets Anymore

**The Gold Standard (Past):**

- Currencies used to be backed by gold
- $1 = certain amount of gold
- Limited money supply = limited inflation

**Fiat Currency (Present):**

- Currencies backed by... trust in government
- No physical asset backing
- Governments can print unlimited amounts
- No hard cap on money supply

**The Problem:**
Without asset backing, there's nothing stopping infinite money printing and inflation.

---

## Understanding Hashing {#hashing}

Now that we understand WHY we need alternative systems, let's learn the technology behind blockchains.

### What is Hashing?

**Simple Definition:**
Hashing is like creating a unique fingerprint for any piece of data.

**Technical Definition:**
A process that transforms input data (of any size) into a fixed-size string of characters.

### Example:

```
Input:  "Hello World"
Output: "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"

Input:  "Hello World!" (just added !)
Output: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
```

Notice how a tiny change (adding "!") completely changed the output!

---

### Key Properties of Hash Functions

#### 1. **Deterministic**

Same input = Same output, always.

```
"blockchain" → always produces the same hash
```

#### 2. **Fast Computation**

Can quickly compute hash for any data size.

```
Hash a 1 KB file: milliseconds
Hash a 1 GB file: seconds
```

#### 3. **Pre-image Resistance**

**Cannot reverse** the hash to find original input.

```
Given: "a591a6d40bf420404a011733cfb7b190..."
Cannot determine: original input was "Hello World"
```

This is one-way encryption!

#### 4. **Avalanche Effect**

Tiny input change = Massive output change.

```
"cat" → "77af778b51abd4a3c51c5ddd97204a9c3ae614ebccb75a606c3b6865aed6744e"
"Cat" → "b87d8f7b1c5c4b5e8f7d6c4a3b2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3"
```

#### 5. **Collision Resistance**

Nearly impossible to find two different inputs that produce the same hash.

---

### Is This a Valid Hashing Algorithm?

**Example:** Shift each letter by one position.

```
Input:  "hello"
Output: "ifmmp"

Input:  "world"
Output: "xpsme"
```

**Analysis:**
Deterministic: Yes
Fast: Yes
Pre-image resistant: **NO** (easily reversible - just shift back!)
Avalanche effect: **NO** (small change = small output change)
Collision resistant: **NO** (multiple patterns could collide)

**Verdict:** ❌ Not a good hashing algorithm!

---

### SHA-256: The Real Deal

**SHA-256** (Secure Hash Algorithm 256-bit) is the industry standard used in Bitcoin and many blockchains.

**Characteristics:**

- Produces a 256-bit (64 character) hexadecimal output
- Extremely secure
- Computationally infeasible to reverse
- Used in Bitcoin mining

**Try it yourself:** https://emn178.github.io/online-tools/sha256.html

### Node.js Example:

```javascript
const crypto = require("crypto");

const input = "100xdevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);
// Output: "e7c4f8f4b8d9e2c1a3b5f7d9e1c3a5b7d9e1c3a5b7d9e1c3a5b7d9e1c3a5b7"
```

**Practice Exercise:**
Try hashing these inputs:

1. "blockchain"
2. "Blockchain" (capital B)
3. "blockchain " (with space)

Notice how different the outputs are!

---

## Introduction to Proof of Work {#proof-of-work}

### What is Proof of Work?

**Simple Explanation:**
Proof of Work is like solving a really hard puzzle to earn the right to add information to the blockchain.

**Why is it needed?**
Without Proof of Work, anyone could add anything to the blockchain. PoW makes it expensive and time-consuming to add blocks, preventing spam and fraud.

### How It Works:

**The Challenge:**
Find a number (called a "nonce") that, when combined with the block data and hashed, produces a hash starting with a certain number of zeros.

**Example:**

```
Goal: Find hash starting with "0000"

Try 1:
Block data + nonce(1) → Hash: "a7c3d9..."  ❌

Try 2:
Block data + nonce(2) → Hash: "b891fe..."  ❌

Try 1,000,000:
Block data + nonce(1000000) → Hash: "0000d3..."  ✅ Success!
```

### Why This Matters:

1. **Requires Computational Work:** Can't cheat, must try millions of combinations
2. **Proves You Spent Resources:** Electricity, hardware, time
3. **Easy to Verify:** Others can quickly check your answer is correct
4. **Secures the Network:** Makes attacks expensive

**Bitcoin Mining:**

- Miners compete to find valid Proof of Work
- First to find it gets rewarded (currently 6.25 BTC + transaction fees)
- Difficulty adjusts to maintain ~10 minute block time

---

## Creating a New Currency {#new-currency}

### The Problem with Creating Your Own Currency

**Scenario:** You want to create "Kirat Coin"

**Why it won't work:**

#### Problem 1: Unlimited Supply

```
You: "I now have 1 million Kirat Coins!"
Everyone: "How do we know you won't create 1 million more tomorrow?"
```

You control the mint, so you can make yourself infinitely rich.

#### Problem 2: Central Authority

```
Transaction: Alice sends Bob 100 Kirat Coins

You (as central authority):
- Verify this transaction? ✅ or ❌
- Could block transactions you don't like
- Could reverse transactions
- Could freeze accounts
```

#### Problem 3: Trust Issue

```
No one trusts you because:
- You can change the rules anytime
- You can create infinite supply
- You control everything
- There's no transparency
```

---

### The Blockchain Solution

**How Bitcoin/Blockchain Solves These Problems:**

#### 1. **Fixed Supply**

```
Bitcoin: Max 21 million coins ever
- Coded in the protocol
- Cannot be changed without consensus
- Predictable inflation schedule
```

#### 2. **Decentralization**

```
No single authority:
- Thousands of nodes verify transactions
- Majority consensus required
- No single point of failure
- No one can change rules alone
```

#### 3. **Transparency**

```
All transactions are public:
- Anyone can verify the blockchain
- Can't cheat or print extra coins
- Mathematical proof, not trust
- Open source code
```

#### 4. **Cryptographic Security**

```
Protected by:
- Hashing (SHA-256)
- Digital signatures
- Proof of Work
- Network consensus
```
