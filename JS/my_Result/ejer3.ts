import { isString, isParagraph } from "./util";
type result = number | string;
const repeatWord = (paragraph: string): result => {
  if (!isString(paragraph)) return "deberia ser un String";
  if (!isParagraph(paragraph)) return "deberia ser una Oracion";
  const regex = /[,"'().]+/gm;
  const formtParagraph = paragraph
    .replace(regex, "")
    .toLocaleLowerCase()
    .split(" ");
  const arrayWord: string[] = [];

  formtParagraph.forEach((word) => {
    if (word.length) {
      arrayWord.push(word.trim());
    }
  });

  const resultRepeat = arrayWord.filter((word, index) => {
    if (word === arrayWord[index + 1]) {
      arrayWord.splice(index, 1);
      return word;
    }
  });
  return resultRepeat.length;
};

const findWordRapeat = (find: string, paragraph: string) => {
  const regex = /[,"'().]+/gm;
  const formtParagraph = paragraph
    .replace(regex, "")
    .toLocaleLowerCase()
    .split(" ");
  const formtFind = find.toLocaleLowerCase();
  const arrayWord: string[] = [];

  formtParagraph.forEach((word) => {
    if (word.length) {
      arrayWord.push(word.trim());
    }
  });

  const resultRepeat = arrayWord.filter((word, index) => {
    if (word === formtFind) {
      arrayWord.splice(index, 1);
      return word;
    }
  });
  return resultRepeat.length;
};
