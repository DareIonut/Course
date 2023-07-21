//Primitive types
let helloName: string = 'Hello there is a string';
let speed: number = 4;
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

//Object Types
let colors: string[] = ['red', 'green', 'blue'];
let speedTicked: number[] = [0.12, 44.5, 25.4];
let sayTruth: boolean[] = [true, false, true];
class Car {}
let vw: Car = new Car();

//Object literal
const point: { x: number; y: number } = { x: 20, y: 30 };

//Function annotations
const sum: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};

//When to use annotations

// 1. Function that returns the 'any'type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a variable on one line line and initialize it later

let words = ['red', 'blue', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
