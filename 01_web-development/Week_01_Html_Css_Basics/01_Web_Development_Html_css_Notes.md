# HTML & CSS - Class 1 Notes

### Resources

| Resource                      |                                               Link                                               |
| :---------------------------- | :----------------------------------------------------------------------------------------------: |
| Class 1 Html & CSS Notion Doc | [Open](https://petal-estimate-4e9.notion.site/Class-1-HTML-CSS-2ea7dfd1073580b18cd3de83f837e082) |
| Assignment Github Repository  |               [Open](https://github.com/100xdevs-bootcamp-1/HTML-CSS-Assignments)                |

## 1. Introduction

This class covers the fundamentals of **HTML** and **CSS** - the building blocks of web development. While 90%+ students already know these basics, this serves as a foundation before moving to more complex topics.

**Key Info:**

- First 2 weeks will be relatively easy (HTML, CSS, JavaScript basics)
- Advanced students can work on optional assignments during class
- Classes aim to end by 9:15-9:30 PM (learning portion), followed by Q\&A

---

## 2. HTML Basics

### 2.1 What is HTML?

**HTML (HyperText Markup Language)** is used to structure content on web pages. It uses a format similar to **XML** (eXtensible Markup Language).

**Basic Structure:**

```HTML
<html>
  <head>
    <!-- Metadata goes here -->
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

### 2.2 Common HTML Tags

#### 2.2.1 Head Tag

Contains **metadata** (information not visible on the page):

- `<title>` - Sets the page title shown in browser tab
- Example: `<title>Harkirat's Portfolio</title>`

#### 2.2.2 Body Tag

Contains the **actual visible content** of your website.

#### 2.2.3 Div and Span Tags

**Div (Division):**

- Used to create **sections** of your webpage
- Takes up **full width** by default
- Elements inside different divs appear **one below the other**

**Span:**

- Used for **inline elements**
- Elements appear **side by side**
- Does not take full width

**Example:**

```HTML
<div>Section 1</div>
<div>Section 2</div>  <!-- Appears below Section 1 -->

<span>Item 1</span>
<span>Item 2</span>  <!-- Appears next to Item 1 -->
```

#### 2.2.4 Heading Tags (H1-H6)

- `<h1>` - Largest heading
- `<h2>` - Second largest
- `<h3>` to `<h6>` - Progressively smaller

#### 2.2.5 Text Formatting Tags

- `<b>` - **Bold** text
- `<i>` - _Italic_ text
- `<u>` - Underlined text

**Note:** These are rarely used today; CSS styling is preferred.

#### 2.2.6 Image Tag

```HTML
<img src="path/to/image.jpg" width="400" />
```

- `src` - Path to the image file
- `width` - Image width in pixels
- Image tags are **self-closing** (no closing tag needed)

#### 2.2.7 Video Tag

```HTML
<video src="path/to/video.mp4" controls width="500"></video>
```

- `controls` - Shows play/pause buttons
- `autoplay` - Video plays automatically (only works if `muted` is also added)
- `muted` - Video has no sound

**Important:** Browsers only allow autoplay for **muted videos** to prevent annoying auto-playing sounds.

#### 2.2.8 Input Tag

```HTML
<input type="text" placeholder="Email" />
<input type="password" placeholder="Password" />
```

- `type="text"` - Regular text input
- `type="password"` - Hides entered text with dots/stars
- `placeholder` - Grey text shown when input is empty

#### 2.2.9 Button Tag

```HTML
<button>Submit</button>
```

#### 2.2.10 Line Break Tag

```HTML
<br />
```

- Adds vertical spacing
- Self-closing tag
- **Not commonly used** (CSS spacing is preferred)

#### 2.2.11 Anchor (Link) Tag

```HTML
<a href="https://google.com">Sign up with Google</a>
<a href="https://google.com" target="_blank">Open in new tab</a>
```

- `href` - URL to link to
- `target="_blank"` - Opens link in new tab

---

## 3. CSS Basics

### 3.1 What is CSS?

**CSS (Cascading Style Sheets)** adds **styling** to HTML elements (colors, spacing, fonts, etc.).

### 3.2 Three Ways to Add CSS

#### 3.2.1 Inline Styles

```HTML
<div style="background-color: blue; color: white;">Content</div>
```

- Styles written directly in HTML tags
- Not recommended for large projects

#### 3.2.2 Internal Styles (Style Tag)

```HTML
<head>
  <style>
    body {
      background-color: black;
      color: white;
    }
  </style>
</head>
```

- Styles written in `<style>` tag inside `<head>`

#### 3.2.3 External Stylesheet

```HTML
<head>
  <link rel="stylesheet" href="index.css" />
</head>
```

- Styles in separate `.css` file
- **Most commonly used** method
- Keeps HTML clean and organized

### 3.3 Common CSS Properties

#### 3.3.1 Colors

**Background Color:**

```CSS
background-color: black;
background-color: #0D1117;  /* Hex code */
background-color: rgb(13, 17, 23);  /* RGB values */
```

**Text Color:**

```CSS
color: white;
color: #FFFFFF;
```

**Understanding Color Codes:**

- Colors are combinations of **Red, Green, Blue** (RGB)
- Each value ranges from **0 to 255**
- Hex format: `#RRGGBB` (two digits per color)
  - `#000000` = Black (no color)
  - `#FFFFFF` = White (full color)
  - `#0000FF` = Pure blue

#### 3.3.2 Font Properties

```CSS
font-size: 20px;
font-weight: bold;  /* Makes text bolder */
font-family: 'Montserrat', sans-serif;
```

#### 3.3.3 Border

```CSS
border: 1px solid gray;
```

- Format: `width style color`
- Creates a visible border around elements

#### 3.3.4 Box Shadow

```CSS
box-shadow: 10px 10px 5px red;
```

- Format: `horizontal vertical blur color`
- Creates shadow **outside** the element
- Unlike border, doesn't take space inside the element

#### 3.3.5 Width and Height

```CSS
width: 200px;
width: 50%;
height: 100vh;  /* 100% of viewport height */
```

- `px` - Fixed pixel value
- `%` - Percentage of parent element
- `vh` - Viewport height (100vh = full screen height)

#### 3.3.6 Border Radius

```CSS
border-radius: 20px;
```

- Makes corners rounded
- Higher value = more rounded

### 3.4 Margin and Padding

**Padding** - Space **inside** an element (between content and border)
**Margin** - Space **outside** an element (between element and surroundings)

```CSS
padding: 20px;  /* All sides */
padding: 10px 20px;  /* Vertical Horizontal */

margin: 20px;
margin-left: 200px;  /* Only left side */
```

**Visual:**

```
[Margin] → [Border] → [Padding] → [Content]
```

### 3.5 Classes and IDs

#### 3.5.1 IDs

```HTML
<div id="top-bar">Content</div>
```

```CSS
#top-bar {
  background-color: black;
}
```

- Use `#` in CSS to target IDs
- Should be **unique** (one per page)

#### 3.5.2 Classes

```HTML
<div class="top-bar">Section 1</div>
<div class="top-bar">Section 2</div>
```

```CSS
.top-bar {
  background-color: black;
}
```

- Use `.` in CSS to target classes
- Can be **reused** on multiple elements
- Follows **DRY principle** (Don't Repeat Yourself)

---

## 4. Making Websites Pretty

### 4.1 Custom Fonts

**Using Google Fonts:**

1. Go to `fonts.google.com`
2. Select a font
3. Get the embed code
4. Add to HTML:

```HTML
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat">
```

1. Use in CSS:

```CSS
font-family: 'Montserrat', sans-serif;
```

**Why use Google-hosted fonts?**

- Users likely already have them **cached** from other websites
- Faster loading times
- No need to host font files yourself

### 4.2 Gradients

**Linear Gradient:**

```CSS
background: linear-gradient(red, blue);
```

**Radial Gradient (from center):**

```CSS
background: radial-gradient(circle, red, blue, green);
```

**Note:** Use subtle color combinations, not loud contrasts like red-to-blue.

### 4.3 Hover Effects and Transitions

**Basic Hover:**

```CSS
button {
  background-color: white;
  color: black;
}

button:hover {
  background-color: gray;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}
```

**Adding Smooth Transitions:**

```CSS
button {
  background-color: white;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: gray;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}
```

- `transition` property makes style changes **gradual** instead of instant
- Format: `property duration timing-function`
- `ease` creates smooth acceleration/deceleration

---

## 5. Flexbox (Preview)

**Problem:** How to arrange elements side-by-side or in complex layouts?

**Current Limitation:**

- Divs take full width by default
- Elements stack vertically
- Hard to create multi-column layouts

**Solution:** Flexbox (to be covered in detail)

- Allows flexible, responsive layouts
- Controls element positioning and spacing
- Will be taught in next session

---

## 6. Assignments

### 6.1 Assignment 1 - Center a Div

Classic CSS challenge: Create a perfectly centered div on the page.

### 6.2 Assignment 2 - 11 Labs Contact Form

Clone the contact sales form from `elevenlabs.io`

- Requires: Flexbox, colors, spacing
- **Stretch goal:** Add the animated wave background (requires Canvas/animation library)

### 6.3 Assignment 3 - Winterfell Website Clone

Advanced challenge - clone `winterfell` website features:

- Scroll hacking effects
- Partial scrolling sections
- Complex animations
- **Note:** Will be explained in Monday's special class by the creator

---

## 7. Key Takeaways

1. **HTML** structures content; **CSS** styles it
2. Modern web dev uses **frameworks** (Tailwind, ShadCN) instead of raw CSS
3. Always use **external stylesheets** for cleaner code
4. **Classes** are reusable; **IDs** are unique
5. Focus on: **fonts, spacing, colors, subtle animations**
6. **Padding** is inside; **Margin** is outside
7. Autoplay videos must be **muted**
8. Use **Google Fonts** for better caching

---

## 8. Common Interview Questions

**Q: Should you use Google-hosted fonts or download them locally?**
**A:** Use Google-hosted URLs for better caching across websites.

**Q: Can videos autoplay with sound?**
**A:** No, browsers only allow autoplay for muted videos (prevents annoying auto-playing sounds).

**Q: What's the difference between padding and margin?**
**A:** Padding is space inside an element; margin is space outside it.

**Q: Div vs Span?**
**A:** Div takes full width (block-level); Span is inline (side-by-side).
