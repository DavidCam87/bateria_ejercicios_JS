function sum(numberOne, numberTwo) {
  if (numberOne === numberTwo) {
    console.log(`${numberOne} y ${numberTwo} son iguales`);
  } else if (numberOne < numberTwo) {
    console.log("el numero superior es: " + numberTwo);

  } else if (numberOne > numberTwo) {
    console.log("el numero superior es: " + numberOne);

  } else {
    console.log("inserte 2 numeros");

  }

}

sum(8, 1);

