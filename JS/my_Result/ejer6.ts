const paintSquare = (number) => {
  let vertice = "";
  for (let index = 0; index < number; index++) {
    vertice = vertice + "*";
  }
  const myNumber = number - 2;
  console.log(vertice);
  if (myNumber) {
    for (let index = 0; index < myNumber; index++) {
      let acount = "";
      for (let i = 0; i < myNumber; i++) {
        acount = acount + " ";
      }
      console.log(`*${acount}*`);
    }
  }
  console.log(vertice);
};
