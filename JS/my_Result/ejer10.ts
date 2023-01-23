const pyramidSimboly  =(number:number):string =>{
const block  = `[-]`;
let pyramid = ``;
for (let i = 0; i < number; i++) {
   pyramid += `${block.repeat(i+1)}\n`
    
}
console.log(pyramid);
return pyramid
}

