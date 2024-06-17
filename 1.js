const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function operateWithNumbers(a, b) {
  if (a > b) {
    console.log("a > b");
  } else if (a < b) {
    console.log("a < b");
  } else {
    console.log("a = b");
  }

  console.log(`a + b = ${a + b}`);
  console.log(`a - b = ${a - b}`);
  
  if (b !== 0) {
    console.log(`a / b = ${a / b}`);
  } else {
    console.log("Деление на ноль невозможно");
  }
  
  console.log(`a * b = ${a * b}`);
}

rl.question('Введите два целых числа (через пробел): ', (input) => {
  const [aStr, bStr] = input.split(' ');
  const a = parseInt(aStr);
  const b = parseInt(bStr);

  if (!isNaN(a) && !isNaN(b)) {
    operateWithNumbers(a, b);
  } else {
    console.log("Ошибка ввода. Введите два целых числа.");
  }

  rl.close();
});