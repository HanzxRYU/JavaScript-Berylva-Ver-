class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return "Hewan sedang makan";
  }
}

// Buat kode kamu di bawah ini
class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }
  makan() {
    return `${this.nama} makan daging`;
  }
}
let harimauSumatra = new Harimau("Harimau Sumatra");
console.log(harimauSumatra.makan());
