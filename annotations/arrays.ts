const cars: string[] = ['vw', 'porche', 'chevy'];
const carSymbol = ['vw', 'pch', 'cvy'];

//2d array

const doubleArry: number[][] = [
  [3, 3, 3, 3, 3, 3, 3],
  [4, 54, 4, 54, 54],
];

//Help with inference when extracting values
const car = cars[0];
const myCar = cars.pop();

//Prevent incopatible values

cars.push('399');

//Help with 'map'
cars.map((car: string): string => {
  return car.toLocaleLowerCase();
});

//Multiple types in array
const importDates: (Date | string)[] = [new Date(), '2023-07-30'];
