
const vowelDetector = (string: string = ''): string | number => {
    if (string === '') return 'error'
    const regexVocals = /[aeiou]/gi;
    const coincidences = string.match(regexVocals);
    return coincidences ? coincidences.length : 0;
}


