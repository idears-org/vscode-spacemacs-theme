
// This is a comment
/* This is a block comment */

import { AnotherClass } from './another-module.js';

const CONSTANT_VALUE = 3.14;
let variable = "Hello, World!";

/**
 * A sample function.
 * @param {number} a - A number.
 * @param {string} b - A string.
 * @returns {string}
 */
function greet(a, b = 'default') {
  if (a > 0) {
    return `Value is \${a} and \${b}`;
  } else {
    return null;
  }
}

class MyClass extends AnotherClass {
  #privateField = 42;

  constructor(name) {
    super();
    this.name = name;
  }

  static staticMethod() {
    return /regex/i;
  }

  get privateData() {
    return this.#privateField;
  }

  async myMethod() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    try {
      await someAsyncTask();
    } catch (e) {
      console.error("An error occurred", e);
    }
  }
}

const instance = new MyClass("instance");
const num = 123;
const bool = true;
const obj = { key: "value" };
const templateString = `This is a template string.`;

export default MyClass;
