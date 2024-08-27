// Implementasi kelas Person
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }
}

// Implementasi kelas Employee yang mewarisi dari Person
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am an ${this.position}`;
  }
}

// Implementasi kelas Manager yang mewarisi dari Employee
class Manager extends Employee {
  constructor(name, position) {
    super(name, position);
  }

  introduce() {
    return `Hi, my name is ${this.name}, I am an ${this.position}, and I manage a team`;
  }
}

// Membuat objek dari kelas Manager, Employee, dan Person
const person = new Person("Uddin");
const employee = new Employee("Rayyan", "Engineer");
const manager = new Manager("Bymeg", "Manager");

// Memanggil metode introduce() pada masing-masing objek
console.log(person.introduce()); // Output: Hi, my name is Alice
console.log(employee.introduce()); // Output: Hi, my name is Bob and I am an Engineer
console.log(manager.introduce()); // Output: Hi, my name is Charlie, I am an Manager, and I manage a team
