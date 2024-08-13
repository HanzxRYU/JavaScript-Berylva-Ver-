// destructing object
let Biograph = {
  name: "Uddin",
  umur: 15,
  address: {
    Kota: "Bogor",
    negara: "Indonesia",
  },
};
console.log(Biograph);
// menyimpan variabel dengan nama sama
const { name, umur, address } = Biograph;
console.log(name, umur, address);
// dengan nama yang berbeda
const { name: n, umur: u } = Biograph;
console.log(n, u);
