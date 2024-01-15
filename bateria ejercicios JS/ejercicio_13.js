const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, name) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === name) {
      console.log(`${param.includes(name)} en posicion: ${i}`);
    }
  }
  if (param.includes(name)) {
  } else {
    console.log(`${param.includes(name)}`);
  }
}
finderName(nameFinder, "Marc");