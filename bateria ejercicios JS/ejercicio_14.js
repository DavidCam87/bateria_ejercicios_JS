const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let count = {};

  for (let i = 0; i < param.length; i++) {
    let counter = param[i];

    if (count[counter]) {
      count[counter]++;

    } else {
      count[counter] = 1;
    }
  }
  console.log(count);

}
repeatCounter(counterWords);