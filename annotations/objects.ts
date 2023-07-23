const profile = {
  name: 'Alex',
  age: 23,
  coords: {
    lat: 3323,
    lng: 34,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//Destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
