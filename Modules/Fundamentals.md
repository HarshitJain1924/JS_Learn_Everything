# **JavaScript – Everything About Everything (Syllabus Phase 1: Fundamentals)**

---

## **1. Variables & Declarations**

- [ ] **Teach:**

#### 1. `var`, `let`, `const` – Line-by-Line Comparison

* **`var`**: Function-scoped or globally scoped (if declared outside a function). Can be **redeclared** and **updated**.

  ```js
  var x = 10;
  var x = 20; // valid
  x = 30; // valid but not recommended
  ```
* **`let`**: Block-scoped. Can be **updated** but **not redeclared** within the same scope.

  ```js
  let y = 10;
  y = 20; // valid
  let y = 30; // ❌ Error
  ```
* **`const`**: Block-scoped. **Cannot be updated or redeclared**. Must be initialized at the time of declaration.

  ```js
  const z = 10;
  z = 20; // ❌ Error
  ```

---

- [ ] 2. **Scope (Global, Block, Functional)**

* **Global Scope:** Variables declared outside any function or block can be accessed anywhere.
* **Function Scope:** Variables declared inside a function using `var` are accessible only within that function.
* **Block Scope:** Variables declared with `let` or `const` inside `{}` are only accessible inside that block.

```js
if (true) {
  let blockScoped = "Hello";
  var functionScoped = "Hi";
}
console.log(functionScoped); // ✅ works
console.log(blockScoped);    // ❌ ReferenceError
```

---

- [ ] 3. **Reassignment vs. Redeclaration**

* **Reassignment:** Updating the value of an already declared variable.
* **Redeclaration:** Declaring the same variable name again in the same scope.

  ```js
  let a = 5;
  a = 10;  // Reassignment ✅
  let a = 15; // Redeclaration ❌
  ```

---

- [ ] 4. **Temporal Dead Zone (TDZ)**

* The period between entering a scope and the line where a variable is declared.
* Accessing a `let` or `const` variable before declaration causes a **ReferenceError**.

```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

---

- [ ] 5. **Hoisting Impact per Type**

* **`var`** is **hoisted** and initialized with `undefined`.
* **`let`** and **`const`** are hoisted but **not initialized** (TDZ applies).

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;
```

---

### ⚠️ **Common Confusion:**

#### 1. Why `var` Leaks Outside a Block but `let` Doesn’t

* `var` doesn’t respect block scope; it only respects function scope.

  ```js
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a); // ✅ works
  console.log(b); // ❌ ReferenceError
  ```

#### 2. Why `const` Allows Changing Object Properties

* `const` prevents reassignment of the **variable reference**, not mutation of the object’s internal properties.

  ```js
  const obj = { name: "John" };
  obj.name = "Doe"; // ✅ allowed
  obj = {}; // ❌ Error
  ```

---

### 🎯 **Mindset:**

* Think of variables as **containers** for storing values, scoped to the **purpose** and **lifespan** of their usage.
* Choose `const` by default → use `let` when you need to reassign → rarely use `var`.

---

### ✍️ **Practice:**

#### 1. Guess the Output (Hoisting)

```js
console.log(a);
var a = 10;
console.log(b);
let b = 20;
```

> Predict outputs and explain the errors.

#### 2. Block-Level Counter Using `let/const`

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // ❌ ReferenceError
```

---

### 📍 **Usage:**

* **Variables** are the **foundation** of all JavaScript logic.
* Used in:

  * Function parameter storage
  * Loops and conditional logic
  * API data handling and DOM manipulation

---

## 📘 **Extra Content**

### 🔹 **Hoisting Summary Table**

| Declaration Type | Hoisted? | Initialized? | Scope Type      | Redeclarable | Reassignable |
| ---------------- | -------- | ------------ | --------------- | ------------ | ------------ |
| var              | ✅ Yes    | ✅ undefined  | Function/Global | ✅ Yes        | ✅ Yes        |
| let              | ✅ Yes    | ❌ No (TDZ)   | Block           | ❌ No         | ✅ Yes        |
| const            | ✅ Yes    | ❌ No (TDZ)   | Block           | ❌ No         | ❌ No         |

---

### 🔹 **Best Practices**

1. Use `const` for constants and objects that won’t be reassigned.
2. Use `let` for counters or changing values in loops.
3. Avoid `var` unless you specifically need function scope.
4. Always declare variables at the **top of their scope** for readability.
5. Never use undeclared variables (they become **implicit globals**, which is bad practice).

---

### 🔹 **Visualization Tip**

Think of:

* **`var`** → "Old JavaScript bag" (global leak-prone)
* **`let`** → "Safe box for temporary values"
* **`const`** → "Locked box for permanent references"

---

### 🔹 **Interview Pointers**

* What is hoisting?
* Difference between `let` and `var` in loops?
* Can you reassign a `const` array?
* What is the TDZ and how to demonstrate it?

---
