async function calculateDivision(a, b) {
    try {
      if (b === 0) {  // Ganti 'divisor' dengan 'b'
        throw new Error("Pembagi tidak boleh 0");
      }
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(a / b);
        }, 1000);
      });
      console.log(`Hasil pembagian: ${result}`);
    } catch (error) {
      console.error(`Kesalahan: ${error.message}`);
    }
  }
  
  calculateDivision(10, 2);
  calculateDivision(10, 0);
  