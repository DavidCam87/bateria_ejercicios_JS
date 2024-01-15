const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let wordLongest = param[0];

  for (let i = 0; i < param.length; i++) {
    if (param[i].length > wordLongest.length) {
      wordLongest = param[i];
    }
  }
  console.log(wordLongest);
}
findLongestWord(avengers);