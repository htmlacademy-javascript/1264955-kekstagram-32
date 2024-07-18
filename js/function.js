//Функция для проверки длины строки
const сheckStringLength = (string,symbols) => string.length <= symbols;
сheckStringLength('sus,3');

//Функция для проверки, является ли строка палиндромом
const checkStringPalindrom = (string) => {
  const stringDespase = string.replaseAll(' ','');
  const stringLowerCase = stringDespase.toLowerCase();
  let stringReverse = '';
  for (let i = stringLowerCase.length - 1; i >= 0; i --) {
    stringReverse += stringLowerCase.at(i);
  }
  return string === stringReverse;
};
checkStringPalindrom('sus');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getFiguresOnly = (string) => {
  const allFigures = string.replace(/[^0-9]/g, '');
  return parseInt(allFigures, 10);
};

getFiguresOnly('123.пришлось_вкатиться_в_экспрешон.456');

