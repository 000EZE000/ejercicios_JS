const detectWord = (sentence: string, wordForbidden: string, replace: string = '') => {
    const replaceWord = '[-CENSURADO-]';
    const redex = new RegExp(wordForbidden);
    return sentence.replace(redex, replace && replaceWord);
}