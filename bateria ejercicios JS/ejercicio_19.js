const toys = [
  { id: 5, name: 'Buzz MyYear' },         //0   length 1
  { id: 11, name: 'Action Woman' },       //1   length 2
  { id: 23, name: 'Barbie Man' },         //2   length 3
  { id: 40, name: 'El gato con Guantes' },//3   length 4
  { id: 40, name: 'El gato felix' }       //4   length 5
];


for (let i = toys.length - 1; i >= 0; i--) {

  if (toys[i].name.includes("gato")) {
    toys.splice(i, 1);
  }
}
console.log(toys);