const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum = sum + param[i];
  }
  console.log(`el resultado del  array es: ${sum}`);
}
sumAll(numbers);