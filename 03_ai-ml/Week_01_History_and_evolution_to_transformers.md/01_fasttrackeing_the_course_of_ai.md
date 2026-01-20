# AI Course — History & Evolution to Transformers

A concise, structured walkthrough from early AI approaches to modern transformer architectures. Sections are numbered for easy navigation; key ideas and examples are highlighted for quick review.

---

### Resources

| Resource          |                                Link                                |
| :---------------- | :----------------------------------------------------------------: |
| Class Slide       | [Open](slide/Fasttracking%20the%20course%20of%20AI_compressed.pdf) |
| LLM Visualization |                  [Open](https://bbycroft.net/llm)                  |
| Jailbreaking AI   |         [Open](https://github.com/elder-plinius/L1B3RT4S)          |

## Table of Contents

- [1. Introduction to Learning](#1-introduction-to-learning)
- [2. Artificial Intelligence - The Evolution](#2-artificial-intelligence---the-evolution)
- [3. Attempt 1: Rule-Based Systems (1950s-1960s)](#3-attempt-1-rule-based-systems-1950s-1960s)
- [4. Attempt 2: Statistical Models and Machine Learning](#4-attempt-2-statistical-models-and-machine-learning)
- [5. AI Winters](#5-ai-winters)
- [6. Convolutional Neural Networks (CNNs)](#6-convolutional-neural-networks-cnns)
- [7. Natural Language Processing (NLP)](#7-natural-language-processing-nlp)
- [8. Word Embeddings - The Breakthrough](#8-word-embeddings---the-breakthrough)
- [9. Word Math - The Magic of Embeddings](#9-word-math---the-magic-of-embeddings)
- [10. Sequence Models](#10-sequence-models)
- [11. Problems with Sequence Models](#11-problems-with-sequence-models)
- [12. Transformer Architecture - The Revolution](#12-transformer-architecture---the-revolution)
- [13. Transformers Applied to Everything](#13-transformers-applied-to-everything)

---

## 1. Introduction to Learning

### 1.1 What Does Learning Mean?

- Learning is changing ourselves based on experiences
- Basic concept: Try something → Get feedback → Adjust → Repeat
- Example: Learning to ride a bicycle - we fail, get feedback, and adjust our approach
- This fundamental loop applies to both human and machine learning

### 1.2 Types of Knowledge

**Explicit Knowledge:**

- Based on defined rules and facts
- Example: "The capital of India is Delhi"
- Can be clearly stated and documented

**Implicit Knowledge:**

- Learned from experience
- Cannot be easily defined by rules
- Example: Recognizing a friend's face without being able to specify exact features
- Based on pattern matching in the brain

### 1.3 What is Intelligence?

- Ability to perform well in a **wide range** of activities or situations
- A calculator is good at arithmetic but **not intelligent** (only one narrow skill)
- Humans can learn across many domains (arithmetic, coding, calculus, etc.)
- This **versatility and adaptability** is intelligence

---

## 2. Artificial Intelligence - The Evolution

### 2.1 Goal of AI

- Making machines intelligent to perform tasks like humans
- Wide range of capabilities: face recognition, chess, driving, understanding language, making jokes, understanding sarcasm
- Not just specific programmed tasks, but **general intelligence**

### 2.2 AI Hierarchy

- **AI (Artificial Intelligence)**: Ultimate goal - making machines intelligent
- **Machine Learning**: Subset of AI - learning from data without explicit programming
- **Deep Learning**: Subset of ML - explicitly relies on neural networks

---

## 3. Attempt 1: Rule-Based Systems (1950s-1960s)

### 3.1 Approach

- First attempt at making machines intelligent
- Writing explicit rules for tasks
- Examples:
  - Email spam filters using specific keywords
  - Temperature-based fever detection
  - Chess piece movement rules

### 3.2 Problems with Rule-Based Systems

- Cannot understand context or sarcasm
- Cannot recognize faces beyond simple descriptions
- Limited to explicitly programmed scenarios
- **No real understanding** of concepts
- Cannot handle ambiguity in language

---

## 4. Attempt 2: Statistical Models and Machine Learning

### 4.1 Key Idea

- Instead of writing rules, **let machines learn from data**
- Machine learning definition: Making machines understand without explicitly writing rules

### 4.2 How Machine Learning Works

1. Show machine thousands/millions of examples
2. Machine takes random guesses initially
3. Receives feedback on correctness
4. Adjusts itself based on feedback
5. Repeats process millions of times
6. Eventually develops statistical understanding

### 4.3 Statistical Pattern Recognition

- Example: Temperature above X degrees → hot weather
- Example: "New" followed by "York" → city name
- Google Translate used statistical mapping between languages
- Based on word frequency and co-occurrence patterns

### 4.4 Early ML Successes

- Improved spam filters
- Better recommendation systems (Netflix, Amazon)
- Enhanced Google Search
- Improved image recognition (basic classification)
- Google relied on statistical models for a decade

### 4.5 Limitations of Early ML

- Cannot have meaningful conversations
- Cannot understand full paragraph context
- Only processes keywords, ignores rest of text
- Cannot recognize objects without sufficient training data
- Requires massive computational power
- Insufficient data availability (early internet era)

## 5. AI Winters

### 5.1 First Collapse (1970s)

**Reasons:**

- Insufficient data (internet just beginning)
- Lack of computational power (no GPUs)
- Only CPUs available (slow for ML tasks)
- Field plateaued with no breakthroughs

**Consequences:**

- Funding pulled from AI startups
- Field became a joke
- Experts abandoned the area
- Research stagnated

### 5.2 Revival (Post-2012)

**Three Key Changes:**

1. **Data Explosion**: Internet provided massive amounts of text, images, videos
2. **GPU Development**: NVIDIA created powerful GPUs for fast mathematical operations
3. **Deep Learning Breakthrough**: Researchers cracked neural network architectures

**Key Event - ImageNet 2012:**

- Dataset: 1 million images, 30-40 classes
- AlexNet (CNN) by Ilya Sutskever and Alex Krizhevsky from University of Toronto
- NVIDIA sponsorship provided computational power
- Won the classification challenge
- Started the modern AI boom

## 6. Convolutional Neural Networks (CNNs)

### 6.1 What are CNNs?

- Architecture based on **convolution** (mathematical function)
- Designed by Yann LeCun
- First major success in image understanding

### 6.2 How CNNs Work

- Process images through convolutional layers
- Extract features like edges, shapes, patterns
- Built for image classification tasks

### 6.3 Limitations

- Only classification, no description or context
- Given 1 million images and 10 classes → classify into buckets
- If image not in training classes → fails
- Dependent on amount and diversity of training data
- **Not real intelligence**, just pattern matching

## 7. Natural Language Processing (NLP)

### 7.1 Why Language is Hard for Computers

**Example: "I saw the man with the telescope"**

- Who has the telescope - me or the man?
- Computers see words as random numbers
- Cannot understand context or ambiguity

**Example: Word position changes meaning**

- "Fast tracking the AI course" vs "The course of AI fast tracking"
- Single word movement completely changes context

### 7.2 Failed Approach: Dictionary Method

- Put every word definition in the system
- Problem: Context changes meaning
- "Apple is a fruit" vs "Apple is a trillion dollar company" vs "Apple is a record label"
- **Same word, completely different meanings**

### 7.3 Statistical Patterns in NLP

- Worked for long time (Google Translate)
- Based on word frequency and co-occurrence
- Example: "New" + "York" appears frequently → city name
- Translation by statistical mapping between languages

## 8. Word Embeddings - The Breakthrough

### 8.1 The Problem

- Machines don't understand words
- Words are just pointers/numbers to computers
- Need to transform words into **meaningful numbers**

### 8.2 What are Word Embeddings?

**Definition:**

- Transforming words into **vectors** (lists of numbers)
- Each number represents a dimension with specific meaning
- Example: Apple = \[0.9, -0.1, 0.05, ...]

**Word2Vec Paper:**

- First major breakthrough in word embeddings
- Brought this concept to wide audience

### 8.3 Understanding Dimensions

**2D Example (for simplicity):**

- Dimension 1: Color (red) - Apple scores 0.9 (high)
- Dimension 2: Shape (square) - Apple scores -0.1 (low)

**Reality:**

- Actual models use 64,000 to 128,000 dimensions
- Each dimension captures different semantic meaning
- Dimensions can represent: color, shape, size, gender, royalty, edibility, etc.

### 8.4 Example: King, Queen, Apple

| Word  | Royalty | Gender (Male) | Edibility |
| ----- | ------- | ------------- | --------- |
| King  | 0.98    | 0.95          | 0.01      |
| Queen | 0.97    | 0.05          | 0.01      |
| Apple | 0.02    | 0.00          | 0.99      |

### 8.5 Visualization

- Similar words are placed **close together** in vector space
- King and Queen close to each other
- Man and Woman close to each other
- Apple and Orange close to each other
- But King/Queen far from Apple/Orange
- **Relationships are also preserved**

## 9. Word Math - The Magic of Embeddings

### 9.1 Basic Operations

**Gender Transformation:**

- King - Man + Woman = Queen
- Removing male gender, adding female gender to royalty = female royalty

**Capital Cities:**

- Paris - France + Italy = Rome
- Removing France, adding Italy to a capital = capital of Italy

**Verb Tenses:**

- Walking - Walk + Swim = Swimming

### 9.2 Why This Matters

- Can understand relationships **not explicitly trained on**
- Mathematical operations reveal semantic relationships
- Model learns more than what it was directly taught
- Enables **generalization** to new concepts

### 9.3 Remaining Problem

- Words still have **single fixed meaning**
- "I went to the bank to deposit cash" vs "I sat on the bank of the river"
- Both use word "bank" but with **completely different meanings**
- Embeddings alone don't solve context problem

## 10. Sequence Models

### 10.1 The Idea

- Process sentences **word by word** in sequence
- Maintain **memory** of previous words
- Each new word incorporates context from earlier words

### 10.2 How Sequence Processing Works

**Example: "I went to the bank"**

1. Process "I" → vector for "I"
2. Process "went" → add to previous context
3. Process "to" → add to growing context
4. Process "the" → add to context
5. Process "bank" → final meaning depends on all previous words

**Result:**

- "bank" in "deposit cash" context → financial institution
- "bank" in "river" context → riverbank
- **Same word, different final vectors** based on context

### 10.3 Recurrent Neural Networks (RNNs)

**Definition:**

- Architecture based on neural networks
- Processes sequences word by word
- Maintains memory/history of previous words
- Part of **deep learning** (uses neural networks)

**How RNNs Work:**

- Each word processed sequentially
- Memory maintained from all previous words
- Current word meaning influenced by history

## 11. Problems with Sequence Models

### 11.1 The Forgetting Problem

**Example Sentence:**
"The cat, which was sitting on the mat that I bought from the store near the old church on the corner, was happy."

**Problem:**

- RNNs process word by word linearly
- By the time it reaches "was happy", it has **forgotten** about "cat"
- Information loss increases with sentence length
- Cannot maintain context over long distances

### 11.2 Why RNNs Fail on Long Sentences

- Process sequentially: word 1 → word 2 → word 3 → ...
- Memory degraded by final word
- Subject ("cat") lost by time verb ("was happy") appears
- **Complete failure on long complex sentences**

### 11.3 LSTMs (Long Short-Term Memory)

**Improvement over RNNs:**

- Added **gates** to selectively remember/forget
- At each word, decides: "Should I remember this?"
- Filters out unimportant words
- Retains: "cat", "sitting", "mat", "bought", "store", "happy"

**Limitations:**

- Better than RNNs (50% improvement)
- Still fails on very long sentences (10x longer)
- Selective filtering helps but doesn't solve the core problem
- Still processes **sequentially** (slow)

## 12. Transformer Architecture - The Revolution

### 12.1 Key Problems to Solve

1. **Speed**: Sequential processing is slow
2. **Memory**: Need to remember relevant information across long distances
3. **Relevance**: Must identify most important words for context

### 12.2 Solution 1: Parallel Processing

**Old Way (RNNs/LSTMs):**

- Process word by word sequentially
- Must finish word 1 before starting word 2
- Very slow

**New Way (Transformers):**

- Process **all words simultaneously**
- Each word processed in parallel
- Dramatically faster

### 12.3 Solution 2: Attention Mechanism

**Core Idea:**

- Model **attends to** (focuses on) most relevant words
- Ignores irrelevant information
- Can look at any word regardless of distance

**Example: "The cat, which was sitting on the mat that I bought from the store near the old church on the corner, was happy."**

**Question: Who was happy?**

- Attention mechanism **lights up** "cat"
- Ignores all the filler words in between
- Instantly connects "happy" with "cat"
- Works like human brain - we skim and focus on key information

### 12.4 How Attention Works

**Example 1: "The animal didn't cross the street because it was too tired."**

- Question: Who was tired?
- When processing "it", attention **highlights "animal"**
- Answer: The animal was tired

**Example 2: "The animal didn't cross the street because it was too wide."**

- Question: What was too wide?
- When processing "it" and "wide", attention **highlights "street"**
- Answer: The street was too wide

**Key Point:**

- **Single word change** (tired → wide) completely changes context
- Attention mechanism adapts instantly
- Identifies correct reference based on context

### 12.5 Why Transformers are Revolutionary

**Two Main Innovations:**

1. **Parallel Processing** → Speed
2. **Attention** → Selective focus on relevant information

**Results:**

- Can handle extremely long sequences
- Processes information much faster
- Maintains context across entire document
- Focuses on most relevant parts
- **1000x better than RNNs/LSTMs**

### 12.6 Attention is All You Need (2017)

**The Paper:**

- Core architecture: Transformer
- Main component: Attention mechanism
- **Bahdanau Attention** (2016) - provided the attention concept
- Google researchers incorporated it into Transformer architecture

**No Recurrence, No Convolution:**

- Doesn't need sequential processing (unlike RNNs)
- Doesn't need convolution (unlike CNNs)
- **Built entirely on attention**

## 13. Transformers Applied to Everything

### 13.1 Why Transformers Work for All Domains

**Key Insight: Everything is a Sequence**

- **Language**: Sequence of words
- **Images**: Sequence of pixels
- **Audio**: Sequence of sound waves
- **Video**: Sequence of frames
- **3D Models**: Sequence of points

**Result:**

- Same architecture works for all modalities
- **Vision Transformers** for images (replaced CNNs)
- **Audio Transformers** for sound
- **Diffusion Transformers** for image/video generation

### 13.2 Impact on Research (2016-2018)

**Before Transformers:**

- PhD students working on different architectures
- CNNs for images
- RNNs for text
- Different approaches for each domain

**After Transformers:**

- **Single architecture** applied to all fields
- Disrupted all previous approaches within 1-2 years
- Became the go-to architecture for AI
- **Attention** was the key innovation
