## **Javascript Foundation** and Basics.

---

### 1. Why Languages ?&#x20;

Whenever you Executes something goes into the ram. What goes into the ram -> not C++ codes not any sourcecode. -- our hardware read high level code. with the help of _compilers_. which will convert high level code into Zero's and One's. (011001010...).&#x20;

Languages are required to make a conversation between us (humans) and machines. because computer only understands 010010101. and we speak english, hindi, french. so we needed some common language. wo make it work.

> - Languarges are used to write qpplications.
>
> - Developers write high level code in these languages.
>
> - Every language has a compiler which converts the developer code into 0110011p0

### 2. Interpreted vs compiled Languages.&#x20;

What are Compilers? : Compilers convert high level developer friendly code into 0s and 1s. (c++ compiler is called g++)&#x20;

There are three Steps require to run a c++ code code. which is **`compiled.`** &#x20;

1.  Writing a code.

2.  Compiling a Code.&#x20;

3.  Running the code (Putting it into ram)

There will be only two Steps while running a javascript code which is `Interpreted`

1.  writing a code.

2.  Running a code.

> Unlike c++ it does not compiled the whole code. then run it. Javascript compiles every line and then it runs. so every line which is written in js. get's comverted into 0s and 1s. then it runs.&#x20;
>
> eg: for a 10 line js program. it will run 10 lines saparately.

| Compiled Languages                                      | Interpreted Languages                      |
| :------------------------------------------------------ | :----------------------------------------- |
| First need to compile, then need to run.                | Usually go line by line.                   |
| Usually don't compile if there is an error in the code. | Can run partially if the error comes later |
| Example - C++, Java, Rust, Golang                       | Example - Javascript, Python               |

### 3. Why JS? >> Other Languages in some use cases.&#x20;

Browsers can only understand HTML / CSS / JS (not technically true ) - browsers can understand other languages like c++, rust, java and others. b;ut js is mandatory.

> Thanks to node.js. now js can be used for "Backend Development"

### 4. Strict vs dynamic languages.

There are two types of Languages. One is Strict and another is Dynamic Typped Languages. Forexample: In strict before initializing any variable we need to specify the types to it. (int number = 5;) in c++. is stricted. and it will not hold any other type of variable other than number. while in js: (var number = 5) here we can specify even "vishal" on the place of 5. and it will happily accept.&#x20;

> While Strictly types languages are more strict code. we can move fast with javascript as it is dynamically typed.&#x20;

### 5. Single-Threaded Nature of JavaScript

The single-threaded nature of JavaScript means that it executes code line by line, completing one task before starting the next. Unlike other languages like Java or C++, which can handle multiple processes at the same time, JavaScript does not split tasks into concurrent threads.

While JavaScript is single-threaded, it runs on only one thread, meaning it processes tasks sequentially on a single core of your machine.

- **JavaScript can only use one core** of your laptop or computer at a time.

- This is one of the reasons why JavaScript is sometimes considered less suitable for highly scalable systems.

- However, there **are ways to make it use all cores** of your machine.

> For example, when I rented a 20-core machine on AWS and ran Node.js, it used only one core at a time.

In short, **JavaScript runs line by line**, processing one line of code at a time. While basic code in C++ also executes sequentially, C++ allows you to create new processes that can run on different cores.

Solution : **`Subroutines`**&#x20;

Subroutines, such as `worker_threads` in Node.js, can help solve this issue by offloading tasks to separate threads, making use of all available cores. (To be explored later)

### 6. Simple primitives in JS( number, string, booleans)

| **Variables**                                                                                                                     | **Data Types**                                                                                                                                                                                                                                                                                    | **If/Else**                                                                                                                                                     | **Loops**                                                                                                                                                                                           |     |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| Variables are containers for storing data values, which can change during execution.                                              | Data types classify the kind of value a variable can hold, determining what operations can be performed on it.                                                                                                                                                                                    | Conditional statements that execute different blocks of code based on specified conditions.                                                                     | Constructs used to repeat a block of code multiple times until a specified condition is met.                                                                                                        |     |
| In JavaScript, we use `let` (block-scoped), `const` (block-scoped and immutable), and `var` (function-scoped and less preferred). | **Primitive data types**: - `String`: Represents text. - `Number`: Represents numeric values. - `Boolean`: Represents logical values (`true` or `false`). - `Null`: Intentional absence of value. - `Undefined`: Unassigned variables. - `BigInt`: Large integers. - `Symbol`: Unique identifier. | - `if`: Executes code if the condition is true. - `else`: Executes code if the `if` condition is false. - `else if`: Tests additional conditions if `if` fails. | - **Common types**: - `For`: Iterates over a block for a set number of times. - `While`: Runs as long as a condition is true. - `Do-While`: Executes at least once, even if the condition is false. |     |
| Example: `let age = 25; const name = "John"; var isStudent = true;`                                                               | **Non-primitive types**: - `Object`: Key-value pairs. - `Array`: Ordered list of values. - `Function`: Block of reusable code.                                                                                                                                                                    | Example: `if (age > 18) { console.log("Adult"); } else { console.log("Minor"); }`                                                                               | Example: `for (let i = 0; i < 5; i++) { console.log(i); }`                                                                                                                                          |     |

!Important

Some Basic workarounds / Examples :&#x20;

- [Strings](./snippet/01_Strings.js)

- [Numbers](./snippet/02_Numbers.js)

- [Arrays](./snippet/03_Arrays.js)

- [Class](./snippet/04_Class.js)

- [Dates](./snippet/05_Dates.js)

- [JSON](./snippet/06_JSON.js)

- [MATH](./snippet/07_MATH.js)

- [Objects](./snippet/08_Objects.js)

### 7. Complex primitives in JS ( arrays, objects )

| Arrays                                                                                                                 | Objects                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Arrays are ordered collections of values. They can hold multiple values of any type (strings, numbers, objects, etc.). | Objects are collections of key-value pairs. The keys are strings (or symbols), and the values can be any valid JavaScript data type. |
| Example: `let arr = [1, 2, 3, 'hello', {name: 'John'}];`                                                               | Example: `let obj = {name: 'John', age: 30, city: 'New York'};`                                                                      |
| Arrays are zero-indexed, meaning the first element has an index of 0.                                                  | Objects do not have a specific order for the properties.                                                                             |
| Arrays can have elements of different data types.                                                                      | Objects are used to store related data in a structured format, often used to model real-world entities.                              |
| Arrays have built-in methods like `.push()`, `.pop()`, `.shift()`, etc.                                                | Objects allow access to values using the key (property name) like `obj.name`.                                                        |

```javascript
const allUser = [
  {
    firstName: "vishal",
    gender: "male",
  },
  {
    firstName: "deepa",
    gender: "female",
  },
];

for (let i = 0; i < allUser.length; i++) {
  if (allUser[i]["gender"] == "male") {
    console.log(allUser[i]["firstName"]);
  }
}
```

This was an example of how can we use objects inside an array.

### 8. Functions in Javascript.

A function in JavaScript is a set of statements that perform a task or calculates a value. it should take some input and return an output where there is some obvious relationship between the input and the output.&#x20;

1.  Abstract out logic in your program.

2.  Take arguments as a input.

3.  Return a value as an output.

4.  You can think of them as an independent program that is supposed to do something given an input.

5.  Functions can take other functions as input - this will cofuse you (callbacks)

```javascript
// Basic Syntax of Function :

function findSum(a, b) {
  // a and b are called arguments. the goal is to do things with the input and return a output.
  return a + b;
}

// calling the same function

const value = findSum(5, 6); // should return 11
```

There are many types of Functions in Javascript some of them are :&#x20;

| Function Type                                      | Description                                                                                                                                                                       |
| :------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Regular Function**                               | A normal function created using the `function` keyword. You can call it by its name. Example: `function greet() { console.log("Hello"); }`                                        |
| **Anonymous Function**                             | A function without a name. Often used as arguments to other functions or assigned to variables. Example: `const greet = function() { console.log("Hello"); };`                    |
| **Arrow Function**                                 | A shorter way to write functions using `=>`. It doesn’t have its own `this`, which can be useful in certain situations. Example: `const greet = () => { console.log("Hello"); };` |
| **IIFE (Immediately Invoked Function Expression)** | A function that runs as soon as it’s defined. It’s useful for avoiding global variables. Example: `(function() { console.log("Hello"); })();`                                     |
| **Generator Function**                             | A function that can pause and resume. It is defined with a `*` and allows you to control the flow of execution. Example: `function* greet() { yield "Hello"; }`                   |
| **Async Function**                                 | A function that works with promises. It allows you to use `await` for handling asynchronous code. Example: `async function fetchData() { await data(); }`                         |
| **Callback Function**                              | A function passed as an argument to be executed later. It’s used in many async operations. Example: `function fetchData(callback) { callback(); }`                                |
| **Higher-Order Function**                          | A function that takes other functions as arguments or returns a function. Example: `function add(a, b) { return a + b; }`                                                         |
| **Method**                                         | A function that is a property of an object. Example: `const person = { greet() { console.log("Hello"); } };`                                                                      |
| **Constructor Function**                           | A function used to create and set up new objects. It’s called with the `new` keyword. Example: `function Person(name) { this.name = name; }`                                      |
| **Pure Function**                                  | A function that doesn’t change anything outside itself and always returns the same result for the same input. Example: `function add(a, b) { return a + b; }`                     |
| **Recursive Function**                             | A function that calls itself to solve a problem. Example: `function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }`                                                  |
| **SetTimeout/SetInterval Function**                | Functions used to delay or repeatedly execute code. Example: `setTimeout(() => { console.log("Hello"); }, 1000);`                                                                 |

```javascript
function sun(num1, num2, fntoCall) {
  let result = num1 + num2;
  fntoCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is " + data);
}

function displayPassiveResult(data) {
  console.log("Sum's result is  " + data);
}

// you are only allowed to call one function after this.
// how will you displayResult of a sum
const ans = sum(1, 2, displayResult);

// callbacks means passing function as an argunment in another function.

// Need to read more about callbacks function and other types of function.
```

### 9. Async Functions vs Sync Functions.

| What does synchronous mean ?                                                     | What does asychronous mean ?                                                                    |
| :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| Together, one oafter the other sequential Only one thing is happening at a time. | Opposite of synchronous Happens n parts. Multiple things are context switching with each other. |

> Human brain and body is single threaded.&#x20;

1.  We can only do one thing at a time.

2.  But we can context switch b/w tasks, or we can delegate tasks to other people.&#x20;

Example :&#x20;

```javascript
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  return findSum(100);
}

// settimeout is an asynchronous function defined by js.
// it will start the process then goes to hello world print and then comes back to check if it has completed or not.
setTimeout(findSumTill100(), 1000);

console.log("hello world");
```

What are common async functions? ( provided by js )

- setTimeout

- fs.readFile - to read a file from your filesystem.

- Fetch - to fetch some data from an api endpoint.

```javascript
console.log("Hi there.");

setTimeout(() => {
  "Hello world ";
}, 500000);

let a = 0;
for (let i = 0; i < 1000000; i++) {
  a = a + 1;
}

console.log(a);
```

Explanation : for real view try <https://latentfliip.com/loupe>

> 1.  Here first the thread will go and print "Hi there".
>
> 2.  Then it will go to setTimeout - as it is async will go to webAPI -- will start doing it's shit. and the thread will move forward.&#x20;
>
> 3.  then the loop will stand working. -- it will go to call stack one by one. and keeps running.....
>
> 4.  the setTimeout is finished. now it will wait for the loop the call stack to get finished. till it will wait in the Callback Queue.
>
> 5.  After everything is finished. event loops will pick it and then send it to call stack.&#x20;

### 10. Callbacks & Promises (it's just a class like Date())

In most cases : promises are syntactical sugar that makes the code slightly more redable. under the hoold it will still use callback. webapis, call stacks etc.&#x20;

A **callback** is a function passed into another function as an argument, which gets executed later. It’s like saying: _“Hey, do this work, and when you’re done, call this function to tell me!”_

**Why Use Callbacks?**

Callbacks let us handle tasks that take time, like reading a file or fetching data from the internet, without stopping everything else.

**Why do we need Promises ?**

// only to do a network call&#x20;

// sleep/wait for some time.

// read a file

// database call&#x20;

// at 99% of time. we will do any to this for this only we use async function for other stuff we use sync function.

Here we will write two code one ugly way and other the promise way. and let's compare.&#x20;

`The ugly way` (Callbacks.) &#x20;

```javascript
const fs = require("fs");

// my own asynchronous function
function vishalRealFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

vishalRealFile(onDone);

// it is just a wrapper on the top of another async function which is fine.
// Usually all async functions you will write will be on a top of JS proviced async functions like setTimeout or fs.readFile.
```

`The Cleaner Way`&#x20;

```javascript

const fs = require("fs");

// my own asynchronous function
function vishalReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

// callback functin to call
function onDone(data) {
  console.log(data);
}

vishalReadFile().then(onDone);

// it's just syntactical sugar.
// still uses callback under the hood.

advance stuff

// we can also do it like this
var a = vishalReadFile();
// what does a holds. it holds a promise. here i can store a Promise in a variable.
a.then(onDone)

```

> If we are using a Promise. there are no callbacks. the reason to introduce a promise is to get rid of promise. because callbacks are a ugly way to write async codes.

> It synchronousley returns the Promise. (may resolve or reject). will return the data later on.&#x20;

A Promise will have 3 Stages.&#x20;

1.  Pending -- working of some async thing

2.  Resolved -- .then should be called on resolved item.

3.  Rejected

Simply : it's just a better way to make code readable. whenever you create a promise, you need to pass in a function as the first argunment which has reaolve as the first argunment.&#x20;

### 10.1 Async/Await Syntax&#x20;

Again just Syntactical sugar. still uses callbacks/Promises under the hood. which makes the code much more readable than callbacks/promises.&#x20;

usually used on the caller side. not on the side where you define an async function.

requirements : any function which requires to await. should have async at the top otherwise it will not work. rather than using .then syntax, we add await before and get the final value in the variable.

```javascript
function VishalAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hello bro");
  });
  return p;
}

// Earlier we needed to do this much to resolve a promise and get it's day.
//to make it more redable and easy to understand what we do it use async/ await
function main() {
  VishalAsyncFunction.then(function (value) {
    console.log(value);
  });
}

// instread of upper call we do call like this: this is more cleaner and we got rid of
// .then and function callbacks etc. etc.ßßßß
async function main() {
  // no callback, no .then syntax
  let value = await VishalAsyncFunction();
  console.log(value);
  console.log("hello world ");
  // when we run this and promise takes 5 seconds. is it stuck here. -- both prints at same time while in
  //  .then it is printing first hello world and then after 3 seconds it prints. the value.
}

main();
console.log("hello duniya");

//  this problem can be understood easily with the help of pasting console.log(after the main. )

// here it will first log "hello duniya". and after after resolution of promise it will print value and then "hello world"
```

// Promises was released with ecmaScript 2015. which is a es6 update.

| Callbacks Syntax | Promise Syntax | Async/await Syntax |
| :--------------- | :------------- | :----------------- |

![](./resources/conpare.png)

All three does the same stuff.

**`How to create a raw async function for yourself ?`**

ans: every async function somehow. uses predefined async function. there is very hard or no way we can create a function that is async for our personal use. altho harkirat has never written such logic in his last 6 years.

altho we can give it a try. here are some approaches.

&#x20;`# Approach 1:`&#x20;

This approach uses a calback. you have created a function where other people can send a callback this is good. but could lead to _callback hell._

```javascript
function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("hi there");
}, 1000);
```

&#x20;`# Approach 2: Promises`

Uses promises to fix the issue. it makes the thing much more simple to read.&#x20;

```javascript
function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  return p;
}

myOwnSetTimeout(1000).then(function () {
  console.log("log the first thing");
});
```
