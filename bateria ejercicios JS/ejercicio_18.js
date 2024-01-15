//Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos
// que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: 'Japan' },     //0
  { id: 11, name: 'Venecia' },  //1
  { id: 23, name: 'Murcia' },   //2
  { id: 40, name: 'Santander' },//3
  { id: 44, name: 'Filipinas' },//4
  { id: 59, name: 'Madagascar' }//5
];

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
  }
}
console.log(placesToTravel);