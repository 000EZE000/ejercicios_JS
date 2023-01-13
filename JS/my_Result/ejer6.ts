const paintSquare = (number) => {
  let vertice = "";
  for (let index = 0; index < number; index++) {
    vertice = vertice + "*";
  }
  const myNumber = number - 2;
  let relleno = ``;
  if (myNumber) {
    for (let index = 0; index < myNumber; index++) {
      let acount = "";
      for (let i = 0; i < myNumber; i++) {
        acount = acount + " ";
      }
      relleno =
        index < myNumber - 1
          ? relleno + `*${acount}*\n`
          : relleno + `*${acount}*`;
    }
  }
  const square =`
${vertice}
${relleno}
${vertice}
`;
  console.log(hola);
  return square;
};

