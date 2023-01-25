
const repeatWord = (string: string, number: number): string => {
    if (number < 0) return 'error'
    let acount = number
    const word = ` "${string}" `
    let sentence = ``
    while (acount) {
        sentence = sentence + word
        acount--
    }
    return sentence
}

