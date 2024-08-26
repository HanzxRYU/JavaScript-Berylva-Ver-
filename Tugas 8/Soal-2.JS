// Implementasi kelas Shape
class Shape {
  draw() {
    return "Drawing shape";
  }
}

// Implementasi kelas Rectangle yang mewarisi dari Shape
class Rectangle extends Shape {
  draw() {
    return "Drawing rectangle";
  }
}

// Fungsi renderShape yang menerima objek shape dan memanggil metode draw()
function renderShape(shape) {
  console.log(shape.draw());
}

// Contoh penggunaan
const shape = new Shape();
const rectangle = new Rectangle();

renderShape(shape); 
renderShape(rectangle);
