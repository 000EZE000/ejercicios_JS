const repeatNumberArray = (firstArray: number[], secondArray: number[]): number[] => {
    const firstSetArray = new Set(firstArray)
    const secondSetArray = new Set(secondArray)
    const noRepeatFirstArray = [...firstSetArray]
    const noRepeatSecondArray = [...secondSetArray]
    return noRepeatSecondArray.filter((num) => noRepeatFirstArray.includes(num))
}

