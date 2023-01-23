const eightToEight = (number: number) => {
    let word = ``
    for (let i = number; i > 0; i = i - 8) {
        word += `n ${i} \n`
    }
    console.log(word);
    return word
}

