# Study Notes: Loops and Pattern Printing in C++

---

## 1. Introduction to Loops

### 1.1 What are Loops?

**Definition**: Loops are control structures that allow repeating an action multiple times until a certain condition is met.

**Purpose**:

- Avoid writing repetitive code
- Execute same task multiple times efficiently
- Essential for tasks like printing sequences, processing digits, pattern printing

**Example Need**:

- Printing numbers 1 to 1000 manually = 1000 lines of code
- Using loops = 3-4 lines of code

---

## 2. Types of Loops

### 2.1 While Loop

**Syntax**:

```cpp
int i = 1;           // Initialization
while (i <= n) {     // Condition
    // Code body
    i++;             // Update
}
```

**Key Components**:

| Component          | Purpose                       | Example        |
| ------------------ | ----------------------------- | -------------- |
| **Initialization** | Create and set starting value | `int i = 1;`   |
| **Condition**      | Check before each iteration   | `i <= 10`      |
| **Body**           | Code to execute repeatedly    | `cout << i;`   |
| **Update**         | Change loop variable          | `i++` or `i--` |

**Flow of Execution**:

```
Start → Initialize i → Check Condition
         ↓ (True)           ↓ (False)
    Execute Body → Update i → Exit Loop
         ↑__________________|
```

**Important Warning**:

- **Always include update step** (i++ or i--)
- Missing update creates **infinite loop**

### 2.2 For Loop

**Syntax**:

```cpp
for (int i = 1; i <= n; i++) {
    // Code body
}
```

**Structure**: All three components in one line

```
for (initialization; condition; update) { body }
```

**Comparison with While Loop**:

| Aspect          | While Loop                  | For Loop                   |
| --------------- | --------------------------- | -------------------------- |
| **Syntax**      | 3 separate lines            | 1 compact line             |
| **Use Case**    | Unknown iterations          | Known iterations           |
| **Readability** | Good for complex conditions | Better for simple counting |

### 2.3 When to Use Which Loop

**For Loop**: Use when you know the range

- Print 1 to n
- Print L to R
- Range-based iterations

**While Loop**: Use for condition-based iterations

- Digit processing (until n becomes 0)
- Unknown number of iterations
- Complex termination conditions

---

## 3. Basic Loop Problems

### 3.1 Print Numbers 1 to N

```cpp
int n;
cin >> n;
for (int i = 1; i <= n; i++) {
    cout << i << endl;
}
```

### 3.2 Print Numbers N to 1 (Reverse)

```cpp
int n;
cin >> n;
for (int i = n; i >= 1; i--) {
    cout << i << endl;
}
```

### 3.3 Print Numbers from L to R

```cpp
int l, r;
cin >> l >> r;
for (int i = l; i <= r; i++) {
    cout << i << endl;
}
```

### 3.4 Print Even Numbers (1 to N)

**Method 1**: Using condition

```cpp
for (int i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        cout << i << endl;
    }
}
```

**Method 2**: Jump by 2 (Better)

```cpp
for (int i = 2; i <= n; i += 2) {
    cout << i << endl;
}
```

### 3.5 Print Alphabets

**Uppercase A to Z**:

```cpp
for (char ch = 'A'; ch <= 'Z'; ch++) {
    cout << ch << endl;
}
```

**Lowercase a to z**:

```cpp
for (char ch = 'a'; ch <= 'z'; ch++) {
    cout << ch << endl;
}
```

**Note**: Characters have ASCII values, allowing comparison and increment operations.

---

## 4. Digit-Based Problems

### 4.1 Core Concepts

**Two Essential Operations**:

| Operation | Result            | Use                     |
| --------- | ----------------- | ----------------------- |
| `n % 10`  | Last digit        | Extract rightmost digit |
| `n / 10`  | Remove last digit | Move to next digit      |

**Example**: n = 12469

- `12469 % 10 = 9` (last digit)
- `12469 / 10 = 1246` (remaining number)

**Mathematical Representation**:

```
12469 = 1246 × 10 + 9
        ↑         ↑
     quotient  remainder
```

### 4.2 Print Number in Reverse

**Code**:

```cpp
long long n;
cin >> n;
while (n != 0) {
    cout << n % 10;    // Print last digit
    n = n / 10;        // Remove last digit
}
```

**Dry Run** (n = 1927):

```
Iteration 1: Print 7, n becomes 192
Iteration 2: Print 2, n becomes 19
Iteration 3: Print 9, n becomes 1
Iteration 4: Print 1, n becomes 0 → Stop
Output: 7291
```

**Edge Case**: If n = 0, add special check:

```cpp
if (n == 0) cout << 0;
```

### 4.3 Sum of Digits

**Code**:

```cpp
int n, sum = 0;
cin >> n;
while (n != 0) {
    sum += n % 10;     // Add last digit
    n = n / 10;        // Remove last digit
}
cout << sum;
```

**Example**: n = 512

- sum = 0 + 2 = 2
- sum = 2 + 1 = 3
- sum = 3 + 5 = 8

### 4.4 Count Number of Digits

**Code**:

```cpp
int n, count = 0;
cin >> n;
while (n != 0) {
    count++;           // Increment counter
    n = n / 10;        // Remove last digit
}
cout << count;
```

### 4.5 Reverse and Store in Variable

**Code**:

```cpp
long long n, answer = 0;
cin >> n;
while (n != 0) {
    answer = answer * 10 + n % 10;
    n = n / 10;
}
cout << answer;
```

**Dry Run** (n = 512):

```
Step 1: answer = 0 × 10 + 2 = 2,    n = 51
Step 2: answer = 2 × 10 + 1 = 21,   n = 5
Step 3: answer = 21 × 10 + 5 = 215, n = 0
Result: 215
```

**Key Technique**:

- Multiply by 10 to make space for new digit
- Add the extracted digit

### 4.6 Palindrome Check

**Logic**: Number reads same forwards and backwards

**Code**:

```cpp
long long n, temp, reverse = 0;
cin >> n;
temp = n;  // Backup original value
while (n != 0) {
    reverse = reverse * 10 + n % 10;
    n = n / 10;
}
if (reverse == temp) {
    cout << "YES";
} else {
    cout << "NO";
}
```

**Why Backup?**: After loop, n becomes 0. Compare with original value stored in temp.

---

## 5. Pattern Printing Fundamentals

### 5.1 Basic Structure

**Pattern printing uses nested loops**:

```cpp
for (int i = 1; i <= n; i++) {      // Outer loop: rows
    for (int j = 1; j <= m; j++) {  // Inner loop: columns
        // Print element
    }
    cout << endl;  // New line after each row
}
```

**Loop Responsibilities**:

| Loop               | Purpose                   |
| ------------------ | ------------------------- |
| **Outer Loop (i)** | Controls number of rows   |
| **Inner Loop (j)** | Controls elements per row |
| **endl**           | Moves to next line        |

---

## 6. Pattern Examples

### 6.1 Rectangle (N × M)

**Pattern** (5 rows, 7 columns):

```
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
```

**Code**:

```cpp
int n, m;
cin >> n >> m;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

### 6.2 Square (N × N)

**Code**:

```cpp
int n;
cin >> n;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

### 6.3 Right-Angled Triangle

**Pattern** (n = 5):

```
*
* *
* * *
* * * *
* * * * *
```

**Logic**:

- Row 1 → 1 star
- Row 2 → 2 stars
- Row i → i stars

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {  // j runs from 1 to i
        cout << "* ";
    }
    cout << endl;
}
```

**Key Insight**: Inner loop depends on outer loop variable (j <= i)

### 6.4 Inverted Right-Angled Triangle

**Pattern** (n = 5):

```
* * * * *
* * * *
* * *
* *
*
```

**Code**:

```cpp
for (int i = n; i >= 1; i--) {      // Start from n, go down to 1
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
```

**Technique**: Reverse the outer loop direction

---

## 7. Hollow Patterns

### 7.1 Hollow Pattern Technique

**Rule**: Print stars only at boundaries, spaces elsewhere

**Boundary Conditions**:

| Pattern              | Boundary Positions         |
| -------------------- | -------------------------- |
| **Rectangle/Square** | i = 1, i = n, j = 1, j = m |
| **Triangle**         | i = 1, i = n, j = 1, j = i |

### 7.2 Hollow Square

**Pattern** (n = 5):

```
* * * * *
*       *
*       *
*       *
* * * * *
```

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
            cout << "* ";
        } else {
            cout << "  ";  // Two spaces
        }
    }
    cout << endl;
}
```

### 7.3 Hollow Rectangle

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        if (i == 1 || i == n || j == 1 || j == m) {
            cout << "* ";
        } else {
            cout << "  ";
        }
    }
    cout << endl;
}
```

### 7.4 Hollow Triangle

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        if (i == 1 || i == n || j == 1 || j == i) {
            cout << "* ";
        } else {
            cout << "  ";
        }
    }
    cout << endl;
}
```

---

## 8. Number Patterns

### 8.1 Two-Step Approach

**Step 1**: Draw the star pattern (shape)  
**Step 2**: Replace stars with required numbers/characters

### 8.2 Pattern: Rows Numbered

**Pattern** (5 rows, 7 columns):

```
1 1 1 1 1 1 1
2 2 2 2 2 2 2
3 3 3 3 3 3 3
4 4 4 4 4 4 4
5 5 5 5 5 5 5
```

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        cout << i << " ";  // Print row number
    }
    cout << endl;
}
```

### 8.3 Pattern: Columns Numbered

**Pattern** (5 rows, 7 columns):

```
1 2 3 4 5 6 7
1 2 3 4 5 6 7
1 2 3 4 5 6 7
1 2 3 4 5 6 7
1 2 3 4 5 6 7
```

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        cout << j << " ";  // Print column number
    }
    cout << endl;
}
```

### 8.4 Pattern: Alphabet Columns

**Pattern**:

```
A B C D E F G
A B C D E F G
A B C D E F G
A B C D E F G
A B C D E F G
```

**Code**:

```cpp
for (int i = 1; i <= n; i++) {
    char ch = 'A';
    for (int j = 1; j <= m; j++) {
        cout << ch << " ";
        ch++;  // Move to next character
    }
    cout << endl;
}
```

### 8.5 Pattern: Alphabet Rows

**Pattern**:

```
A A A A A A A
B B B B B B B
C C C C C C C
D D D D D D D
E E E E E E E
```

**Code**:

```cpp
char ch = 'A';
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        cout << ch << " ";
    }
    ch++;  // Increment after each row
    cout << endl;
}
```

**Key Difference**:

- Column pattern: Declare ch inside outer loop
- Row pattern: Declare ch before outer loop, increment after inner loop

---

## 9. Important Concepts Summary

### 9.1 ASCII Values

**Definition**: Every character has a unique integer ID

| Character | ASCII Value |
| --------- | ----------- |
| 'A'       | 65          |
| 'B'       | 66          |
| 'a'       | 97          |
| 'b'       | 98          |

**Why Important**: Enables character arithmetic (ch++, ch--, comparisons)

### 9.2 Modulo Operator (%)

**Definition**: Returns remainder after division

**Common Uses**:

| Expression   | Purpose        |
| ------------ | -------------- |
| `n % 10`     | Get last digit |
| `n % 2 == 0` | Check if even  |
| `n % 2 != 0` | Check if odd   |

### 9.3 Data Types for Large Numbers

**Use `long long`** when:

- Numbers exceed 10^9
- Avoiding overflow in calculations

```cpp
long long n;  // Can store up to 10^18
```

---

## 10. Common Mistakes to Avoid

### 10.1 Infinite Loops

**Cause**: Missing update statement

```cpp
// WRONG
int i = 1;
while (i <= 10) {
    cout << i;
    // Missing i++
}
```

**Fix**: Always include i++ or i--

### 10.2 Variable Scope in Loops

**Problem**: Using loop variable after it becomes 0

```cpp
// WRONG
while (n != 0) {
    n = n / 10;
}
if (reverse == n)  // n is 0 here!
```

**Fix**: Store original value in temporary variable

```cpp
temp = n;
// ... process n ...
if (reverse == temp)  // Compare with original
```

### 10.3 Edge Cases

**Always handle**:

- n = 0
- Negative numbers (if applicable)
- Single digit numbers

---

## 11. Key Takeaways

1. **Loop Selection**:
   - For loop → Known iterations
   - While loop → Condition-based iterations

2. **Digit Problems Formula**:
   - Extract: `n % 10`
   - Remove: `n / 10`

3. **Pattern Printing Strategy**:
   - Step 1: Create star pattern (shape)
   - Step 2: Replace with required elements

4. **Hollow Patterns**:
   - Identify boundary conditions
   - Print stars at boundary, spaces elsewhere

5. **Always Include**:
   - Update statement in loops
   - Edge case handling
   - Proper data types for large numbers

---

## 12. Practice Problems Summary

**Basic Loops**:

- Print 1 to N
- Print N to 1
- Print even/odd numbers
- Multiplication table

**Digit Problems**:

- Reverse number
- Sum of digits
- Count digits
- Palindrome check

**Pattern Printing**:

- Rectangle/Square
- Triangle (normal/inverted)
- Hollow shapes
- Number/Alphabet patterns

---

**Important**: Practice all assignment problems before the next class and upcoming contest.
