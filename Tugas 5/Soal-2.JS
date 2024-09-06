for (let i = 3; i <= 50; i++) {
  if (i % 4 === 0 && i % 5 === 0) {
    console.log("FizzBuzz",i);
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
