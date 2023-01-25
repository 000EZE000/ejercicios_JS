
type array = number[]

const divideArray = (arrayN: number[], number: number): array[] | string => {
    if (arrayN.length === number) return [arrayN];
    if (arrayN.length < number) return 'error';
    let arrayfather: array[] = []
    for (const array of arrayN) {
        let lastArray = arrayfather.at(-1)
        if (!lastArray || lastArray.length === number) {
            arrayfather.push([array]);
        } else {
            lastArray.push(array)
        }

    }
    return arrayfather
}


