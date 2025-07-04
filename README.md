# BSc Studies - JavaScript General Basics

This repository contains my Bachelor's degree studies and projects, specifically focusing on JavaScript fundamentals and web development exercises. All code and exercises are based on the methodology and concepts from [Eloquent JavaScript (4th edition, 2024)](https://eloquentjavascript.net/) by Marijn Haverbeke and [Learning React (2nd edition)](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/) by Alex Banks and Eve Porcello.

## 📚 Project Structure

- `JS_general_basics/` - Main directory containing all exercises (1-10)
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
  - `exercises_9/` - React build comparison
    - `react-webpack-starter/` - _Manual React project with custom webpack and Babel configuration._
    - `project/` - _Same application moved to Create React App environment._
  - `exercises_10/` - React State Management (Final Project)
    - `star-rating/` - _Complete React state management project with star rating system and color list._

## 🎯 Exercise Sets (1-10)

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

### Exercise Set 9: React Build Comparison

**Location:** `JS_general_basics/exercises_9/`

- `react-webpack-starter/` - Manual React project with custom webpack and Babel configuration
  - _Simple "Hello, React with Webpack!" app built from scratch._
- `project/` - Same application moved to Create React App environment
  - _Same "Hello, React with CRA!" app using Create React App tooling._
  - _Demonstrates the difference between manual setup and CRA convenience._

### Exercise Set 10: React State Management (Final Project)

**Location:** `JS_general_basics/exercises_10/star-rating/`

This is the **final and most comprehensive project** in this repository, demonstrating advanced React concepts:

#### **Star Rating System**

- **Static Stars** - Initial implementation with fixed star display
- **createArray Function** - Utility function for generating arrays (Learning React methodology)
- **Modular Components** - Separate Star component in its own module
- **Advanced Reusability** - Flexible props and callback functions
- **Interactive Rating** - Click stars to change rating with state management

#### **Component Tree State Management**

- **RatingApp** - Parent component managing multiple rating systems
- **State Down Pattern** - Demonstrates "sending state down a component tree"
- **Centralized State** - Single source of truth for all rating data
- **Callback Functions** - Child-to-parent communication pattern

#### **ColorList Application**

- **Color Component** - Individual color display with rating system
- **AddColorForm** - Form for adding new colors with validation
- **ColorList** - Main component managing color collection
- **CRUD Operations** - Create, Read, Update, Delete color functionality
- **Dynamic Lists** - Array manipulation and rendering

#### **Key Learning Outcomes**

- **State Management** - Understanding when and where to maintain state
- **Component Architecture** - Proper separation of concerns
- **Props vs State** - Clear distinction between properties and state
- **Reusable Components** - Building flexible, reusable UI components
- **Event Handling** - Managing user interactions and form submissions
- **List Rendering** - Dynamic rendering of component lists
- **React Developer Tools** - Debugging and testing React applications

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

4. **Run React projects:**

   ```bash
   cd JS_general_basics/exercises_X/project_name
   npm install
   npm start
   ```

## 📖 Learning Progression (Exercises 1-10)

The exercises follow a logical progression:

1. **Basic JavaScript** (Exercise 1) - Variables, loops, conditionals
2. **HTML Integration** (Exercise 2) - DOM manipulation, user input
3. **Error Handling** (Exercise 3) - Robust programming practices
4. **Interactive Applications** (Exercise 4) - Real-world web development
5. **Form Handling & HTTP** (Exercise 5) - Form submission, event prevention, local storage
6. **Modern JavaScript** (Exercise 6) - AJAX, Promises, Modules, and modular code
7. **React Basics** (Exercise 7) - Component-based UI development
8. **React Composition** (Exercise 8) - Component reuse, props, and arrow functions
9. **React Build Tools** (Exercise 9) - Understanding build processes and tooling
10. **React State Management** (Exercise 10) - Advanced state management and component architecture

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Node.js** (for running .js files)
- **React** (for exercises 7-10)
- **Create React App** (for React projects)
- **Font Awesome** (for icons in React projects)
- **Webpack & Babel** (for manual React setup)

## 📝 Notes

- All exercises (1-10) are self-contained and can be run independently
- HTML files include embedded CSS and JavaScript for simplicity
- Error handling is progressively introduced throughout the course
- Each exercise builds upon concepts from previous exercises
- All code follows Eloquent JavaScript and Learning React methodology
- Modern best practices are emphasized throughout
- React projects (exercises 7-10) demonstrate real-world development patterns

## 🎓 Course Completion

This repository represents the complete JavaScript General Basics course for my Bachelor's degree studies. All 10 exercise sets demonstrate progressive learning, with the final project (exercise 10) showing mastery of:

- **React Component Architecture**
- **State Management Patterns**
- **Modern JavaScript Development**
- **Interactive Web Application Development**
- **Code Organization and Modularity**

---

**Status: COMPLETED** ✅  
_This repository contains all 10 completed exercise sets for the JavaScript General Basics course._
