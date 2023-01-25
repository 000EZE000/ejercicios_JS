const subdivideArray = (array, newArraySize) => {

    // Un array de arrays
    let arrays = [];

    // Recorro el array que llega por parametros
    for (let object of array) {
        console.log(object);
        // conseguir el ultimo elemento del array
        let lastElement = arrays[arrays.length -1];
        console.log(lastElement);
        // Si el ultimo elemento del array no existe, crear uno nuevo
        if (!lastElement || lastElement.length === newArraySize) {
            arrays.push([object]);
        }
        else {
            lastElement.push(object);
        }
    }
    return arrays;
}

subdivideArray([1,2,2,4,5],3)

module.exports = subdivideArray;