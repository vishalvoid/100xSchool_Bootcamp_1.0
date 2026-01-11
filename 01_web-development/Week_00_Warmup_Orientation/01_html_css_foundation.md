# **HTML & CSS Foundation** - The Complete Beginner's Guide

---

## 1. What is HTML?

**HTML** (HyperText Markup Language) is the skeleton of every website. It's not a programming language - it's a **markup language** that structures content on the web.

Think of building a house:

- **HTML** = The structure (walls, rooms, doors)
- **CSS** = The decoration (paint, furniture, style)
- **JavaScript** = The functionality (electricity, plumbing, smart features)

> HTML tells the browser what content to display - headings, paragraphs, images, links, etc.

---

## 2. What is CSS?

**CSS** (Cascading Style Sheets) is what makes websites beautiful. It controls colors, fonts, layouts, spacing, and animations.

Without CSS, every website would look like a plain document from the 1990s!

---

## 3. Basic HTML Structure

Every HTML document follows this basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
```

**Breaking it down:**

- `<!DOCTYPE html>` - Tells the browser this is an HTML5 document
- `<html>` - Root element, wraps everything
- `<head>` - Contains metadata (info about the page)
- `<title>` - Shows up in the browser tab
- `<body>` - Contains all visible content

---

## 4. HTML Tags - The Building Blocks

Tags are like containers. Most come in pairs: opening `<tag>` and closing `</tag>`.

### **Text Tags**

```html
<!-- Headings (h1 is biggest, h6 is smallest) -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Bold and Italic -->
<strong>This text is bold</strong>
<b>This is also bold</b>
<em>This text is italic</em>
<i>This is also italic</i>

<!-- Line breaks -->
<br />
<!-- Creates a new line -->
<hr />
<!-- Creates a horizontal line -->
```

### **Links**

```html
<!-- Link to another page -->
<a href="https://google.com">Click here to go to Google</a>

<!-- Link to another page in your site -->
<a href="about.html">About Us</a>

<!-- Open link in new tab -->
<a href="https://google.com" target="_blank">Open Google in new tab</a>
```

### **Images**

```html
<!-- Basic image -->
<img src="photo.jpg" alt="Description of image" />

<!-- Image with size -->
<img src="photo.jpg" alt="My photo" width="300" height="200" />

<!-- Image from the internet -->
<img src="https://example.com/image.jpg" alt="Online image" />
```

> **Important:** `<img>` is a **self-closing tag** - it doesn't need a closing tag!

### **Lists**

```html
<!-- Unordered list (bullets) -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### **Divs and Spans** (Containers)

```html
<!--Div: Block-level container (takes full width) -->
<div>
  <h2>Section Title</h2>
  <p>This is inside a div.</p>
</div>

<!-- Span: Inline container (only takes needed space) -->
<p>This is <span style="color: red;">red text</span> in a paragraph.</p>
```

---

## 5. HTML Forms - Getting User Input

```html
<form>
  <!-- Text input -->
  <label>Name:</label>
  <input type="text" placeholder="Enter your name" />

  <!-- Email input -->
  <label>Email:</label>
  <input type="email" placeholder="your@email.com" />

  <!-- Password input -->
  <label>Password:</label>
  <input type="password" />

  <!-- Checkbox -->
  <input type="checkbox" /> I agree to terms

  <!-- Radio buttons -->
  <input type="radio" name="gender" /> Male
  <input type="radio" name="gender" /> Female

  <!-- Dropdown -->
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>

  <!-- Text area (multi-line) -->
  <textarea rows="4" cols="50">Enter text here</textarea>

  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
```

---

## 6. Semantic HTML (Better Structure)

These tags describe the meaning of content:

```html
<header>
  <h1>Website Title</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Content goes here...</p>
  </article>

  <section>
    <h3>Section Title</h3>
    <p>More content...</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>
```

---

## 7. CSS - Three Ways to Add Styles

### **Method 1: Inline CSS** (Not recommended)

```html
<p style="color: blue; font-size: 20px;">This is blue text</p>
```

### **Method 2: Internal CSS** (In the `<head>`)

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>
```

### **Method 3: External CSS** (Best practice!)

**HTML file:**

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

**style.css file:**

```css
p {
  color: blue;
  font-size: 20px;
}
```

---

## 8. CSS Selectors - Targeting Elements

### **Basic Selectors**

```css
/* Element selector - targets all <p> tags */
p {
  color: blue;
}

/* Class selector - targets elements with class="intro" */
.intro {
  font-size: 18px;
}

/* ID selector - targets element with id="main" */
#main {
  background-color: yellow;
}

/* Multiple selectors */
h1,
h2,
h3 {
  font-family: Arial;
}

/* Descendant selector - targets <p> inside <div> */
div p {
  color: red;
}
```

**HTML example:**

```html
<p>Regular paragraph</p>
<p class="intro">Paragraph with class</p>
<p id="main">Paragraph with ID</p>
```

---

## 9. CSS Properties - Common Styling

### **Text Styling**

```css
.text-example {
  /* Color */
  color: red;
  color: #ff0000; /* Hex code */
  color: rgb(255, 0, 0); /* RGB */

  /* Font */
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold; /* or 400, 700, etc. */
  font-style: italic;

  /* Text alignment */
  text-align: center; /* left, right, justify */
  text-decoration: underline;
  text-transform: uppercase; /* lowercase, capitalize */

  /* Line height */
  line-height: 1.5;

  /* Letter spacing */
  letter-spacing: 2px;
}
```

### **Background**

```css
.background-example {
  background-color: lightblue;
  background-image: url("image.jpg");
  background-size: cover; /* contain, 100px, 50% */
  background-position: center;
  background-repeat: no-repeat;
}
```

### **Box Model** (Every element is a box!)

```css
.box-example {
  /* Size */
  width: 300px;
  height: 200px;

  /* Padding (space inside the box) */
  padding: 20px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  /* Shorthand: padding: top right bottom left */
  padding: 10px 20px 10px 20px;

  /* Border */
  border: 2px solid black;
  border-radius: 10px; /* Rounded corners */

  /* Margin (space outside the box) */
  margin: 20px;
  margin: 10px 20px; /* top/bottom left/right */
  margin: 0 auto; /* Center the element */
}
```

**Visual representation:**

```
┌─────────────────────────────────────┐
│           MARGIN (outside)          │
│  ┌───────────────────────────────┐  │
│  │     BORDER                    │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   PADDING               │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │    CONTENT        │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## 10. Display Property

```css
/* Block: Takes full width, starts on new line */
.block {
  display: block;
}

/* Inline: Only takes needed space, stays in line */
.inline {
  display: inline;
}

/* Inline-block: Inline but can have width/height */
.inline-block {
  display: inline-block;
  width: 200px;
}

/* None: Hides the element completely */
.hidden {
  display: none;
}
```

---

## 11. Flexbox - Easy Layouts

Flexbox makes it super easy to align and distribute items!

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row; /* row, column */

  /* Horizontal alignment */
  justify-content: center; /* flex-start, flex-end, space-between, space-around */

  /* Vertical alignment */
  align-items: center; /* flex-start, flex-end, stretch */

  /* Wrap items */
  flex-wrap: wrap;

  /* Gap between items */
  gap: 20px;
}

.item {
  /* Make item grow */
  flex: 1;

  padding: 20px;
  background-color: lightblue;
}
```

**Common Flexbox patterns:**

```css
/* Center everything perfectly */
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

/* Navbar layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Card grid */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

---

## 12. Positioning

```css
/* Static: Default, normal flow */
.static {
  position: static;
}

/* Relative: Positioned relative to normal position */
.relative {
  position: relative;
  top: 20px;
  left: 10px;
}

/* Absolute: Positioned relative to nearest positioned parent */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed: Stays in place when scrolling */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Sticky: Relative until scroll, then fixed */
.sticky {
  position: sticky;
  top: 0;
}
```

---

## 13. Responsive Design - Media Queries

Make your site work on all devices!

```css
/* Default styles for desktop */
.container {
  width: 1200px;
  margin: 0 auto;
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 20px;
  }

  .navbar {
    flex-direction: column;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 10px;
  }

  h1 {
    font-size: 24px;
  }
}
```

---

## 14. Pseudo-classes and Pseudo-elements

```css
/* Hover effect */
button:hover {
  background-color: blue;
  cursor: pointer;
}

/* Link states */
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
}
a:active {
  color: green;
}

/* First/last child */
li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

/* Nth child */
tr:nth-child(even) {
  background-color: #f2f2f2; /* Zebra striping */
}

/* Before/After */
.quote::before {
  content: '"';
}

.quote::after {
  content: '"';
}
```

---

## 15. Simple Animations

```css
/* Transition (smooth changes) */
.button {
  background-color: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: red;
  transform: scale(1.1);
}

/* Keyframe animation */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-box {
  animation: slideIn 1s ease-in-out;
}
```

---

## 16. Complete Example - Simple Card

**HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Profile Card</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="card">
      <img src="profile.jpg" alt="Profile picture" />
      <h2>John Doe</h2>
      <p class="title">Web Developer</p>
      <p>I love creating beautiful websites!</p>
      <button>Contact Me</button>
    </div>
  </body>
</html>
```

**CSS:**

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  max-width: 300px;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.card h2 {
  margin: 15px 0 5px;
  color: #333;
}

.card .title {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.card button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.card button:hover {
  background-color: #45a049;
}
```

---
