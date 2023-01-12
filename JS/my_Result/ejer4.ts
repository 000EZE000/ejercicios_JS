const reverseString =(string)=>{
    let reverse = '';
    console.log(string.length > 0)
    for (let index = string.length; index > 0; index--) {
    reverse =   reverse + string[index-1]        
    }
return reverse
}