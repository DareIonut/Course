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

sum(1, 3);
