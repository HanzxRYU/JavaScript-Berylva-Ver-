class AkunBank {
  constructor(saldo, setoran) {
    this._saldo = saldo;
    this._setoran = setoran;
  }

  // Setter untuk saldo
  setSaldo(saldo) {
    this._saldo = saldo;
  }

  // Setter untuk setoran
  setSetoran(setoran) {
    this._setoran = setoran;
  }

  // Getter untuk saldo
  getSaldo() {
    if (this._saldo < 0) {
      return null;
    } else {
      return this._saldo + this._setoran;
    }
  }

  // Getter untuk setoran
  getSetoran() {
    return this._setoran;
  }
}

// Membuat instance objek AkunBank
let akun = new AkunBank(1000, 2000);

// Menampilkan saldo
console.log(akun.getSaldo());
