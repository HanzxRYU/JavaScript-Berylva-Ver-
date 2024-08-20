// Implementasi kelas Vehicle
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    return "Vehicle is starting";
  }
}

// Implementasi kelas Car yang mewarisi dari Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  start() {
    return "Car is starting";
  }
}

// Membuat objek dari kelas Car dan memanggil metode start
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());

