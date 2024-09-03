// Fungsi Pendaftaran Pengguna
function registerUser(name, userType) {
  if (userType === "VIP") {
    return `Welcome VIP, ${name}!`;
  } else {
    return `Welcome, ${name}!`;
  }
}

// Fungsi Diskon Berdasarkan Jenis Pengguna
function applyDiscount(userType, purchaseAmount) {
  let discount;
  if (userType === "VIP") {
    discount = 20;
  } else {
    discount = 10;
  }
  const totalAfterDiscount = purchaseAmount - (purchaseAmount * discount) / 100; // Menghitung total setelah diskon
  return totalAfterDiscount;
}

// Panggil fungsi registerUser dengan nama "Nina" dan userType "VIP"
const welcomeMessage = registerUser("Nina", "VIP");
console.log(welcomeMessage);
// Panggil fungsi applyDiscount dengan userType "VIP" dan purchaseAmount 200
const totalAfterDiscountVIP = applyDiscount("VIP", 200);
console.log(totalAfterDiscountVIP);

// Panggil fungsi applyDiscount dengan userType "NON VIP" dan purchaseAmount 100
const totalAfterDiscountNonVIP = applyDiscount("NON VIP", 100);
console.log(totalAfterDiscountNonVIP);
