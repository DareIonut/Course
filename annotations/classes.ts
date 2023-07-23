class Vehicle {
  color: string = "red";
  speed: number = 455;

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log("Into the wall!");
  }

  public honk(): void {
    console.log("beep");
  }
}

//short alternative for using constructor
class House {
  constructor(public squareMeters: number) {}
}

//Super expample for inheritance

class Bathroom extends House {
  constructor(private wallColor: string, squareMeters: number) {
    super(squareMeters);
  }
}

class Car extends Vehicle {
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();

const car = new Car("blue");
car.honk();

const appartament = new House(70);
