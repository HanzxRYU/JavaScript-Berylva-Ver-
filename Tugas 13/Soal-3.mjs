function fetchStep1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1 complete!");
    }, 1000);
  });
}

function fetchStep2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 2 complete!");
    }, 2000);
  });
}

function fetchStep3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 3 complete!");
    }, 3000);
  });
}

Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });
