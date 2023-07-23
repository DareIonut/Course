//Section 4
//More on function annotations
const add = (a: number, b: number): number => {
  console.log(a + b);
  return a + b;
};

function divide(a: number, b: number): number {
  return a;
}

const multiply = function (a: number, b: number): number {
  return b;
};

const logMessage = (message: string): void => {
  console.log(message);
};

logMessage('You Rock!');

//Destructuring

const weather = {
  date: new Date(),
  weather: 'sunny',
  fog: false,
};

const getWeather = ({
  date,
  weather,
  fog,
}: {
  date: Date;
  weather: string;
  fog: boolean;
}): void => {
  console.log(date, weather, fog);
};

getWeather(weather);
