# Introduction to C++ - Class Notes

## 1. What is Programming?

Programming is giving clear instructions to a computer so that it can do some work for us.

### 1.1 Key Points to Remember

* Computers are super dumb - they have no common sense
* Computers cannot think independently
* Computers can follow instructions if provided properly
* Computers only understand binary (0s and 1s)

### 1.2 Why Do Programming Languages Exist?

Programming languages bridge the gap between humans and computers:

```
Humans (English) → Programming Language (C++/Python/Java) → Compiler → Binary (0s & 1s) → Computer
```

***

## 2. Setting Up

### 2.1 IDE (Integrated Development Environment)

* Software needed to write code
* Online options: CodeChef IDE, OnlineGDB, etc.
* No need to install anything locally for now

### 2.2 Syntax

* Syntax = Grammar of a programming language
* Just like "I love to cook" vs "Cook I love to" - order matters
* You must follow the correct syntax for the computer to understand

***

## 3. Your First C++ Program: Hello World

```C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
```

### 3.1 Understanding Each Part

1. `#include <iostream>` - Header file that helps us use `cout`
2. `using namespace std;` - Allows us to use `cout` instead of `std::cout`
3. `int main()` - Entry point where program execution starts
4. `cout` - Prints text to screen
5. `return 0;` - Indicates successful program completion

***

## 4. Important Rules

### 4.1 Semicolon (;)

Every statement must end with a semicolon (like a full stop in English)

```C++
cout << "Hello";  // Correct
cout << "Hello"   // Wrong - missing semicolon
```

### 4.2 Case Sensitivity

```C++
cout  // Correct
Cout  // Wrong - uppercase C
COUT  // Wrong - all uppercase
```

### 4.3 Double Quotes for Text

```C++
cout << "Hello World";  // Prints: Hello World
cout << Hello World;    // Error
```

### 4.4 Brackets Come in Pairs

```C++
int main() {
    // code here
}  // Opening { and closing } bracket
```

***

## 5. Printing Multiple Lines

### 5.1 Using endl (End Line)

```C++
cout << "Hello World" << endl;
cout << "100x School" << endl;
```

**Output:**

```
Hello World
100x School
```

### 5.2 Without endl

```C++
cout << "Hello World";
cout << "100x School";
```

**Output:**

```
Hello World100x School
```

***

## 6. Operators

### 6.1 Arithmetic Operators

```C++
cout << 10 + 3;   // 13
cout << 10 - 3;   // 7
cout << 10 * 3;   // 30
cout << 10 / 3;   // 3 (integer division)
cout << 10 % 3;   // 1 (remainder)
```

### 6.2 Integer Division

```C++
cout << 10 / 3;     // 3 (not 3.33!)
cout << 10.0 / 3;   // 3.333...
cout << 10 / 3.0;   // 3.333...
```

**Rule:** When both numbers are integers, result is an integer (quotient only)

### 6.3 Modulo (%) - Remainder Operator

```C++
cout << 10 % 3;   // 1 (remainder when 10 ÷ 3)
cout << 15 % 4;   // 3
cout << 20 % 5;   // 0
```

***

## 7. Variables

Variables are boxes in memory that store information.

### 7.1 Creating Variables

```C++
int age = 21;
```

* `int` - Data type (integer)
* `age` - Variable name
* `21` - Value stored

### 7.2 Printing Variables

```C++
int age = 21;
cout << age;      // Prints: 21 (without quotes)
cout << "age";    // Prints: age (with quotes - treats as text)
```

***

## 8. Data Types

| Data Type   | Purpose            | Example             |
| ----------- | ------------------ | ------------------- |
| `int`       | Whole numbers      | `10`, `-5`, `0`     |
| `long long` | Very large numbers | `1000000000`        |
| `double`    | Decimal numbers    | `3.14`, `2.5`       |
| `char`      | Single character   | `'A'`, `'@'`, `'z'` |
| `bool`      | True/False values  | `true`, `false`     |

### 8.1 Examples

```C++
int marks = 85;
double price = 99.99;
char grade = 'A';
bool isPassed = true;
```

### 8.2 Variable Naming Rules

**Allowed:**

* Use meaningful names: `age`, `marks`, `studentName`
* Declare before use
* Start with letter or underscore

**Not Allowed:**

* Use spaces: `student name`
* Use reserved keywords: `int`, `double`, etc.
* Start with numbers: `1variable`

***

## 9. Creating Multiple Variables

```C++
// Separate declarations
int a = 10;
int b = 20;

// Combined declaration (same type)
int length, breadth;
int x = 5, y = 10;
```

***

## 10. Taking Input from User

### 10.1 Using cin

```C++
int age;
cin >> age;  // Takes input from user
cout << age;
```

### 10.2 Example: Sum of Two Numbers

```C++
int a, b;
cin >> a >> b;           // Input: 10 20
cout << a + b;           // Output: 30
```

**Note:** In C++, input can be on same line or separate lines.

***

## 11. Relational Operators

| Operator | Meaning               | Example  | Result  |
| -------- | --------------------- | -------- | ------- |
| `>`      | Greater than          | `5 > 3`  | `true`  |
| `<`      | Less than             | `5 < 3`  | `false` |
| `>=`     | Greater than or equal | `5 >= 5` | `true`  |
| `<=`     | Less than or equal    | `4 <= 3` | `false` |
| `==`     | Equal to              | `5 == 5` | `true`  |
| `!=`     | Not equal to          | `5 != 3` | `true`  |

***

## 12. Boolean Values

### 12.1 True and False

```C++
bool answer1 = (5 == 5);  // true
bool answer2 = (6 == 5);  // false
bool answer3 = (6 < 5);   // false
```

### 12.2 Boolean Representation

In C++, booleans are represented as:

* `true` = 1
* `false` = 0

```C++
bool a = true;
cout << a;        // Prints: 1

bool b = false;
cout << b;        // Prints: 0
```

### 12.3 The Golden Rule

**Only 0 is FALSE. Everything else (positive, negative, decimal) is TRUE.**

```C++
bool x = 1;      // true
bool y = -1;     // true
bool z = 100;    // true
bool w = 0;      // false (only this!)
```

***

## 13. Conditional Statements (if-else)

Make decisions based on conditions.

### 13.1 Basic if-else Syntax

```C++
if (condition) {
    // Code runs if condition is TRUE
} else {
    // Code runs if condition is FALSE
}
```

### 13.2 Example 1: Even or Odd

```C++
int n;
cin >> n;

if (n % 2 == 0) {
    cout << "Even";
} else {
    cout << "Odd";
}
```

### 13.3 Example 2: Pass or Fail

```C++
int marks;
cin >> marks;

if (marks >= 35) {
    cout << "Pass";
} else {
    cout << "Fail";
}
```

***

## 14. Finding Maximum/Minimum

### 14.1 Maximum of Two Numbers

```C++
int a, b;
cin >> a >> b;

if (a > b) {
    cout << "Max = " << a;
} else {
    cout << "Max = " << b;
}
```

### 14.2 Maximum of Three Numbers

```C++
int a, b, c;
cin >> a >> b >> c;

if (a >= b && a >= c) {
    cout << "Max = " << a;
} else if (b >= a && b >= c) {
    cout << "Max = " << b;
} else {
    cout << "Max = " << c;
}
```

### 14.3 Logical Operators

```C++
&&  // AND operator (both conditions must be true)
||  // OR operator (at least one condition must be true)
!   // NOT operator (negates the condition)
```

***

## 15. Practice Problems

### 15.1 Problem 1: Rectangle Area & Perimeter

```C++
int length, breadth;
cin >> length >> breadth;

cout << "Area = " << length * breadth << endl;
cout << "Perimeter = " << 2 * (length + breadth) << endl;
```

***

## 16. Important Tips

### 16.1 Think Before Coding

1. Use pen and paper
2. Write pseudocode first
3. Test with examples
4. Then type the code

### 16.2 Test Your Code

* Try different inputs
* Check edge cases
* Look for patterns

### 16.3 Debugging Tips

* Read error messages carefully
* Check for missing semicolons
* Verify bracket pairs
* Check variable names (case-sensitive)

***

## 17. Study Checklist

Before the next class, make sure you understand:

* [ ] How to write basic C++ program structure
* [ ] Using `cout` to print
* [ ] Using `cin` to take input
* [ ] Creating variables with different data types
* [ ] Basic operators (+, -, \*, /, %)
* [ ] Relational operators (>, <, ==, etc.)
* [ ] Boolean values (true/false, 1/0)
* [ ] if-else statements
* [ ] Finding max/min of numbers

***

## 18. Useful Resources

* **CodeChef IDE:** For online coding practice
* **Code Forces:** For solving assignment problems
* **Join the group:** Access assignments through Code Forces groups

***

## 19. Homework

1. Solve all assignment problems on Code Forces
2. Maintain a revision sheet tracking:
   * Problem name
   * Problem link
   * Topic covered
   * Date solved
   * Need revision? (Yes/No)
3. Practice writing code without looking at notes

***

