//Функция для проверки длины строки
const stringLenghtCheck = (string,symbols) => string.length <= symbols;
stringLenghtCheck('sus');

//Функция для проверки, является ли строка палиндромом
const stringPalindromCheck = (string) => {
  const stringDespase = string.replaseAll(' ','');
  const stringLowerCase = stringDespase.toLowerCase();
  let stringReverse = '';
  for (let letterNumber = stringLowerCase.length - 1; letterNumber >= 0; letterNumber --) {
    stringReverse += stringLowerCase.at(letterNumber);
  }
  return string === stringReverse;
};
stringPalindromCheck('sus');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const figuresInString = (string) => {
  let allFigures = '';
  for (let figures = 0; figures <= string.length; figures ++) {
    if(!Number.isNaN(parseInt(string.at(figures), 10))) {
      allFigures += parseInt(string.at(figures), 10);
    }
  }
  return allFigures;
};
figuresInString('lmao.l.0.l');
