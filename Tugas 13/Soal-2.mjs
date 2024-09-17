const numbers = [3, 7, 1, 6];
function checkNumber() {
  return new Promise((resolve, reject) => {
    if (numbers[1] > 5) {
      resolve("Number is greater than 5");
    } else if (numbers[1] < 5) {
      reject("Number is less than 5");
    }
  });
}
checkNumber()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
