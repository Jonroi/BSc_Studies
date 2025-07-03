# BSc Studies - JavaScript General Basics

This repository contains my Bachelor's degree studies and projects, specifically focusing on JavaScript fundamentals and web development exercises. All code and exercises are based on the methodology and concepts from [Eloquent JavaScript (4th edition, 2024)](https://eloquentjavascript.net/) by Marijn Haverbeke.

## 📚 Project Structure

- `JS_general_basics/` - Main directory containing all exercises
  - `exercises_1/` - Basic JavaScript fundamentals (loops, conditionals, arrays)
    - _Practice with for-loops, conditionals, and array basics._
  - `exercises_2/` - HTML integration & functions (DOM manipulation, forms)
    - _Simple web pages, DOM access, and basic form handling._
  - `exercises_3/` - Error handling & advanced concepts (try-catch, regex)
    - _Error handling with try-catch, input validation, and regular expressions._
  - `exercises_4/` - Interactive web applications (games, chat, color changes)
    - _Small interactive browser apps: balloon game, chat, and color changer._
  - `exercises_5/` - Form handling and event prevention
    - _Form submission, event prevention, and local storage._
  - `exercises_6/` - Modern JavaScript: AJAX, modules, promises
    - `ajax/` - AJAX and Promises exercises
      - _Fetch API and asynchronous programming with promises._
    - `commonJS/` - CommonJS module system exercises
      - _Node.js-style modules and imports._
    - `modular/` - Modular JavaScript with package.json
      - _ES module syntax and modular code organization._
  - `exercises_7/` - React basics and component practice
    - `hello_world/` - _First React app: simple Hello World component._
    - `unordered_list/` - _React component that renders an unordered list from an array._
  - `exercises_8/` - React component composition and props
    - `passing/` - _React app demonstrating prop passing between components._
    - `property/` - _React app with Hello component converted to arrow function and HelloList container._

## 🎯 Exercise Sets

### Exercise Set 1: Basic JavaScript Fundamentals

**Location:** `JS_general_basics/exercises_1/`

- `exercise_1_3a.js` - Even Numbers Loop
  - _Prints even numbers using a for-loop._
- `exercise_1_3b.js` - Deposit Sum Calculator
  - _Calculates the sum of deposits in an array._
- `exercise_1_4.js` - FizzBuzz Implementation
  - _Classic FizzBuzz problem with loop and conditionals._
- `exercise_1_6.js` - Array Manipulation
  - _Basic array operations and transformations._

### Exercise Set 2: HTML Integration & Functions

**Location:** `JS_general_basics/exercises_2/`

- `2_1_leapYear.html` - Leap Year Calculator
  - _Checks if a year is a leap year using form input._
- `2_2_containsNumber.html` - Number Array Checker
  - _Checks if a number exists in an array._
- `2_3_conver_minute.html` - Time Converter
  - _Converts minutes to hours and minutes._
- `2_5_a-d.js` - Book Object Management
  - _Manages a collection of book objects._
- `2_6_convert_ounces_to_grams.js` - Unit Conversion System
  - _Converts ounces to grams using a function._

### Exercise Set 3: Error Handling & Advanced Concepts

**Location:** `JS_general_basics/exercises_3/`

- `3_2_leap_year_error_handling.html` - Leap Year with Error Handling
  - _Leap year checker with error handling for invalid input._
- `3_3_leap_year_method_1.html` - Leap Year Method 1
  - _Alternative leap year calculation method._
- `3_4_leap_year_method_2.html` - Leap Year Method 2
  - _Another leap year calculation approach._
- `3_7_regex.js` - Regular Expression Validation
  - _Validates input using regular expressions._

### Exercise Set 4: Interactive Web Applications

**Location:** `JS_general_basics/exercises_4/`

- `balloon.html` - Balloon Game
  - _Interactive game where you control a balloon._
- `chat.html` - Chat Application
  - _Simple browser-based chat interface._
- `colorChange.html` - Background Color Changer
  - _Change the background color interactively._

### Exercise Set 5: Form Handling and HTTP Requests

**Location:** `JS_general_basics/exercises_5/`

- `contentNegotiation.html` - Content Negotiation
  - _Demonstrates HTTP content negotiation._
- `form.html` - Form Handling
  - _Handles form submission and validation._
- `localstorage.html` - Local Storage
  - _Stores and retrieves data from browser local storage._
- `prevent.html` - Event Prevention
  - _Prevents default form and link actions._

### Exercise Set 6: Modern JavaScript (AJAX, Modules, Promises)

**Location:** `JS_general_basics/exercises_6/`

- **AJAX & Promises** (`ajax/`)
  - `promises.js` - Fetching data with AJAX and Promises (Random User API)
    - _Fetches random user data asynchronously._
- **CommonJS Modules** (`commonJS/`)
  - `pricelist.js` - Price list module (CommonJS)
    - _Exports a price list as a module._
  - `usePricelist.js` - Using the price list module
    - _Imports and uses the price list module._
- **Modular JavaScript** (`modular/`)
  - `pricelist.js` - Price list module (ES Modules)
    - _Exports a price list using ES module syntax._
  - `usePricelist.js` - Using the price list module
    - _Imports and uses the ES module price list._
  - `package.json`, `package-lock.json` - Module configuration
    - _Defines dependencies and module structure._

### Exercise Set 7: React Basics

**Location:** `JS_general_basics/exercises_7/`

- `hello_world/` - Simple React Hello World app
  - _Minimal React app rendering a greeting._
- `unordered_list/` - React app rendering an unordered list from an array using components
  - _Renders a list of SQL threats using a React component and props._

### Exercise Set 8: React Component Composition

**Location:** `JS_general_basics/exercises_8/`

- `passing/` - React prop passing demonstration
  - _Shows how to pass data between React components using props._
- `property/` - React component composition with arrow functions
  - _Hello component converted to arrow function syntax._
  - _HelloList container component that renders multiple Hello components._
  - _Demonstrates component reusability and composition patterns._

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone [repository-url]
   cd BSc_Studies
   ```

2. **Run HTML files:**
   - Open any `.html` file in a web browser
   - For interactive exercises, use a local server for best experience
3. **Run JavaScript files:**

   ```bash
   node JS_general_basics/exercises_X/exercise_name.js
   ```

## 📖 Learning Progression

The exercises follow a logical progression:

1. **Basic JavaScript** - Variables, loops, conditionals
2. **HTML Integration** - DOM manipulation, user input
3. **Error Handling** - Robust programming practices
4. **Interactive Applications** - Real-world web development
5. **Modern JavaScript** - AJAX, Promises, Modules, and modular code
6. **React Basics** - Component-based UI development
7. **React Composition** - Component reuse, props, and arrow functions

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Node.js** (for running .js files)
- **React** (for exercises_7)

## 📝 Notes

- All exercises are self-contained and can be run independently
- HTML files include embedded CSS and JavaScript for simplicity
- Error handling is progressively introduced throughout the course
- Each exercise builds upon concepts from previous exercises
- All code follows Eloquent JavaScript methodology and modern best practices

---

_This repository will be updated throughout my studies with additional materials and projects._
