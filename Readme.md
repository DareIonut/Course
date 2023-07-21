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
* We use type annotations when:
    - When we declare a variable on a line and we are supposed to use it later.
    - When we want a variable to have a type that can't be inferred.
    - When a function returns the 'any' type and we need to clarify the value.
* The type inference is used **always**.

### Any Type
* **Any type** is returned when typescript doesn't know what type a variable is. (avoid the **any type**)

**Variable definition with OR symbol:**

```Javascript
let numberAboveZero: boolean | number = false; 😄
```
## Section 4 - Annotations with Functions and Objects 🥇
