function filterArray(numbers, value) {
  numbers.forEach(function (number, index) {
    if (number > value) {
      console.log(`${number}`);
    }
  });
}
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);
