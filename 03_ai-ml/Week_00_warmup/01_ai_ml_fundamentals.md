# AI/ML Fundamentals

## Table of Contents

1. [What is Artificial Intelligence (AI)?](#1-what-is-artificial-intelligence-ai)
2. [What is Machine Learning (ML)?](#2-what-is-machine-learning-ml)
3. [What is Deep Learning?](#3-what-is-deep-learning)
4. [What is a Neural Network?](#4-what-is-a-neural-network)
5. [Core Components](#5-core-components)
6. [Training Process](#6-training-process)
7. [Types of Neural Networks](#7-types-of-neural-networks)
8. [Real-Life Applications](#8-real-life-applications)
9. [Tools and Libraries](#9-tools-and-libraries)
10. [Learning Path](#10-learning-path)
11. [Summary](#11-summary)

---

## 1. What is Artificial Intelligence (AI)?

**Artificial Intelligence** means making machines **smart enough to think or act like humans**.

### 1.1 Examples:

* Google Maps suggesting routes
* YouTube recommending videos
* Face unlock on phones
* ChatGPT answering questions

AI is a **big umbrella**.

---

## 2. What is Machine Learning (ML)?

**Machine Learning** is a part of AI where:

> Machines learn from **data** instead of being explicitly programmed.

### 2.1 Simple Example:

If we show a machine **1000 photos of cats and dogs**, it learns patterns and later can say:

> "This looks like a cat"

**Key Point:** ML = Learning from data

---

## 3. What is Deep Learning?

**Deep Learning** is a sub-field of Machine Learning.

* Uses **Neural Networks**
* Works very well for images, voice, text, videos

**Key Point:** Neural Networks are the **heart of Deep Learning**

---

## 4. What is a Neural Network?

A **Neural Network** is inspired by the **human brain**.

Just like:

* Brain has **neurons**
* Neural Network has **artificial neurons**

### 4.1 Goal:

> Learn patterns → Make predictions → Improve over time

### 4.2 Human Brain vs Neural Network

| Human Brain | Neural Network    |
| :---------- | :---------------- |
| Neurons     | Nodes / Artificial Neurons   |
| Signals     | Numbers           |
| Learning    | Adjusting weights |

### 4.3 Basic Structure of Neural Network

A Neural Network has **3 main parts**:

```
Input Layer  →  Hidden Layer(s)  →  Output Layer
```

#### 4.3.1 Input Layer

* Takes input data
* Example: height, weight, pixels of image

#### 4.3.2 Hidden Layer

* Does the **thinking / processing**
* Can be one or many layers

#### 4.3.3 Output Layer

* Gives final answer
* Example: Yes / No, Cat / Dog

### 4.4 Example: Predict Pass or Fail

**Inputs:**

* Hours studied
* Sleep hours

**Output:**

* Pass or Fail

Neural Network learns:

> More study + good sleep = higher chance of passing

---

## 5. Core Components

### 5.1 What is a Neuron?

A **Neuron** is the smallest unit in a neural network.

#### 5.1.1 What it does:

1. Takes inputs
2. Multiplies with weights
3. Adds bias
4. Applies activation function
5. Produces output

#### 5.1.2 Simple Neuron Math (Don't panic)

```
Output = (input × weight) + bias
```

**Example:**

```
Input = 2
Weight = 0.5
Bias = 1

Output = (2 × 0.5) + 1 = 2
```

### 5.2 What are Weights?

* Weights decide **importance of input**
* Higher weight = more influence

**Example:**

* Study hours weight = high
* Phone usage weight = low

**Key Point:** Learning = adjusting weights

### 5.3 What is Bias?

Bias helps the model **shift output up or down**.

**Real-life example:**

> Even if you study 0 hours, teacher may still give grace marks

### 5.4 Activation Function (Very Important)

Activation function decides:

> Should neuron fire or not?

#### 5.4.1 Why needed?

* Adds **non-linearity**
* Helps learn complex patterns

#### 5.4.2 Common Activation Functions

**5.4.2.1 Sigmoid**

* Output between 0 and 1
* Used for probability

```
0 → No
1 → Yes
```

**5.4.2.2 ReLU (Most popular)**

```
If x < 0 → 0
If x > 0 → x
```

**5.4.2.3 Softmax**

* Used for multi-class output
* Example: Cat / Dog / Horse

---

## 6. Training Process

### 6.1 What is Loss Function?

Loss function tells:

> How wrong the prediction is

**Example:**

* Actual answer = 1
* Predicted = 0.2
* Loss = high

**Goal:** **Minimize loss**

#### 6.1.1 Common Loss Functions

* Mean Squared Error (numbers)
* Binary Cross Entropy (Yes / No)
* Categorical Cross Entropy (multiple classes)

### 6.2 Training a Neural Network

Training means:

1. Give input
2. Predict output
3. Calculate loss
4. Adjust weights
5. Repeat

This loop continues **thousands of times**.

### 6.3 What is Backpropagation?

A scary word but simple idea.

> Backpropagation = learning from mistakes

#### 6.3.1 What it does:

* Finds which weight caused error
* Adjusts weights backward

Like:

> "Oops! Prediction wrong → fix from back"

### 6.4 Gradient Descent

Gradient Descent means:

> Going step-by-step towards minimum error

**Example:**

* You are on a hill
* Want to reach lowest point
* Take small steps downhill

---

## 7. Types of Neural Networks

### 7.1 Feedforward Neural Network

* Data flows one direction
* Simple tasks

### 7.2 CNN (Convolutional Neural Network)

* Used for images
* Face recognition, medical scans

### 7.3 RNN (Recurrent Neural Network)

* Used for sequences
* Text, speech, time-series

### 7.4 LSTM / GRU

* Improved RNN
* Better memory

### 7.5 Transformer

* Used in ChatGPT, BERT
* Handles long text efficiently

---

## 8. Real-Life Applications

* Google Translate
* Self-driving cars
* Voice assistants
* Medical diagnosis
* Fraud detection

---

## 9. Tools & Libraries

* Python
* TensorFlow
* PyTorch
* Keras

---

## 10. Learning Path (Recommended)

1. Basics of Python
2. Math (basic only)
3. Machine Learning
4. Neural Networks
5. Deep Learning
6. Projects

---



