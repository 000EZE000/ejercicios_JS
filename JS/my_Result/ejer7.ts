const accountantOdd = (beginning: number, final: number) => {
    if (typeof Number(beginning + final) !== 'number') return 'error';
    if (beginning <= 0 || final <= 0) return 'error';
    if (final <= beginning) return 'error';
    let acount = 0
    for (let i = beginning; i < final; i++) {
        if (Number.isInteger((i / 2))) acount++
    }
    return acount
}