class Buku {
  constructor(title, author,) {
    this.title = title;
    this.author = author;
  }
  getDetails() {
    return `This is ${this.title}, a ${this.author}.`;
  }
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}
const mybook = new Buku("Javascript Essentials", "Jane Doe");
console.log(mybook.getDetails());

// bagian 2
mybook.updateAuthor("Uddin");

console.log(mybook.getDetails());
