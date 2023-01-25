const letterAddRepeat = (string: string = ''): [number, string] | string => {
    if (string.length === 0) return 'error'
    let repeatLetter: [number, string] = [0, '']
    const letter = string.replaceAll(' ', '')

    for (let i = 0; i < string.length; i++) {
        const reg = new RegExp(letter[i])
        const addLetter = [...letter.matchAll(reg)].join('').length
        if (addLetter !== 0 || addLetter > repeatLetter[0]) {
            repeatLetter = [addLetter, string[i]]
        }
    }
    return repeatLetter
}

