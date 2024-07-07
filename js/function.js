//Функция для проверки длины строки
const stringLenghtCheck = (string,symbols) => string.length <= symbols;
stringLenghtCheck('sus,3');

//Функция для проверки, является ли строка палиндромом
const stringPalindromCheck = (string) => {
  const stringDespase = string.replaseAll(' ','');
  const stringLowerCase = stringDespase.toLowerCase();
  let stringReverse = '';
  for (let i = stringLowerCase.length - 1; i >= 0; i --) {
    stringReverse += stringLowerCase.at(i);
  }
  return string === stringReverse;
};
stringPalindromCheck('sus');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const figuresOnly = (string) => {
  const allFigures = string.replace(/[^0-9]/g, '');
  return parseInt(allFigures, 10);
};

figuresOnly('123.пришлось_вкатиться_в_экспрешон.456');

