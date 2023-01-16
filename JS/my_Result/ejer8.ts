const revertNumber = (num: number) => {
    return Number(String(num).split('').reverse().join(''))
}