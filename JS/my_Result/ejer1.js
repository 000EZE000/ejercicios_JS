
const tableMultilplication = (number) => {
    const vericationNumber = typeof number !== 'number' && ;
    const verificationInterger = !(Number.isInteger(number));
   if(vericationNumber && verificationInterger)
        return 'El parametro deber ser numero y Interger, Ejemplo : "5"';
console.log(`Tabla del ${number}`);
[1,2,3,4,5,6,7,8,9,10].forEach( num => {
      console.log(`${number} X ${num} = ${number * num}`)});
}