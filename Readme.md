# TypeScript Course Notes 📓

## Util commands

```console
npm install typescript ts-node axios
ts-node index.js
typescript index.js
```

## Section 3 - Type annotations in Action 🥇

- **Type annotations** → When we tell typescript what type has a variable, function, etc. For example: number, string, etc.

```Typescript
const car: string = "Land Rover"
```

- **Type inference** → When typescript guesses the type.

```Typescript
let car = "Land Rover"
```

### Types

**Primitive Types**: number, string, boolean, void, null, undefined, symbol.
**Object Types**: functions, arrays, classes and objects.

### Object Literal Annotations

```Javascript
const point: { x: number; y: number } = { x: 20, y: 30 };
```

### Function annotations

```Typescript
const sumAll: (x:number, y:number) => number = (x:number, y:number) => {

  return x+y;

}

```

**Important: When to use inference and annotations.**</br>

- We use type annotations when:
  - When we declare a variable on a line and we are supposed to use it later.
  - When we want a variable to have a type that can't be inferred.
  - When a function returns the 'any' type and we need to clarify the value.
- The type inference is used **always**.

### Any Type

- **Any type** is returned when typescript doesn't know what type a variable is. (avoid the **any type**)

**Variable definition with OR symbol:**

```Javascript
let numberAboveZero: boolean | number = false; 😄
```

## Section 4 - Annotations with Functions and Objects 🥇

Missing because i forgot to save.

## Section 5 - Arrays

- Typescript can do type inference when extracting values from an array.
- Can prevent from adding wrong type values.
- Can help with methods: map, forEach, reduce.
- Flexible - arrays can still contain multiple different types.

### Multiple array values example

```Javascript
const importDates:(Date | string)[] = [new Date(), "2023-07-30"];
```

## Section 6 - Tuples

- Rarely used.

Example of tuple:

```Javascript
const pepsi: [string, boolean, number] = ['brown', true, 40];
```

## Section 7 - Interfaces

- For achiving a strong reuse we must use **Interfaces + Classes**.
- With **Interfaces** we can create new Types in Typescript where we can describe the property names and value types of an object.
  Interface example:

```Javascript
interface Vehicle{
  name: string;
  year: number;
  broken: boolean;
}
```

- Inside of a interface we can declare a type to be another object or function, etc.
- We are not limited to primitive values.

```Javascript
interface Vehicle{
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
```

- With interfaces we can define functions that can be easly reusable with different objects.

```Javascript
const printReport = (item: Reportable): void => {
  console.log(item.summary());
};
```

## Important!

- General Strategy for Reusable Code in TS:

* Create functions taht accept arguments that are typed with interfaces.
* Objects/classes can decide to 'implement' a given interface to work with a function.

### Section 8 - Building Functionality with Classes

**Classes** - Represents a blueprint to create on object with some fields (values) and methods (functions) to represent a 'thing', object.

**Inheritance example:**

```Javascript
class Car extends Vehicle {}
```

- Access modifiers:

* public - method can be called anywhere.
* private - method can be called by other methods in this class.
* protected - method can be called by other methods in this class or by other methods in child classe.

## Constructor method

**Constructor function** is called every time we initalize a new instance of the specific Class.

- With the help of construct function we can pass arguments to the instance.

```Javascript
class Vehicle {
  color: string = "red";

  constructor(color: string){
    this.color = color;
}

const vehicle = new Vehicle('orange');
```

- The short alternative for this is:

```Javascript
class House {
  constructor(public squareMeters: number) {}
}
const appartament = new House(70);
```

**Example of usage for super inheritace of constructor:**

```Javascript
//Super expample for inheritance
class Bathroom extends House {
  constructor(private wallColor: string, squareMeters: number) {
    super(squareMeters);
  }
}
```

Note: We have to use super fuction because Bathroom is an extension of House.
