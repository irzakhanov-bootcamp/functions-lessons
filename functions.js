// ЗАДАЧА 1
function removeUser() {}

function createPost() {}

function addItem() {}

function readFile() {}

function getElements() {}

function createParentElement() {}

function startGame() {}

function sendMessage() {}

removeUser();
createPost();
addItem();
readFile();
getElements();
createParentElement();
startGame();
sendMessage();

// ЗАДАЧА 2

// Функция для добавления времени
function addUser(userData) {}

// Функция возведения в степень
function myPow(a, b) {}

// Функция сложения двух чисел
function plus(x, y) {}

// Функция деления
function division(a, b) {}

// Функция умножения
function multiplication(a, b) {}

// функция вычитания
function minus(userData) {}

// Функция для вывода имени
function addUser(name) {}

// Функция для вывода возраста
function addUser(age) {}

// Функция для вывода веса
function addUser(weight) {}

// Функция для вывода цвета глаз
function addUser(colorOfEye) {}

// ЗАДАЧА 3

// Получить имя пользователя
function getUserName(name) {
  return name;
}

// Получить возраст
function getAge(age) {
  return age;
}

// Получить вес
function getWeight(weight) {
  return weight;
}

// Получить ширину
function getWidth(width) {
  return width;
}

// Получить ширину
function getHeght(height) {
  return height;
}

// Получить цвет
function getColor(color) {
  return color;
}

// Получить скорость
function getSpeed(speed) {
  return speed;
}

// Получить стоимость
function getPrice(price) {
  return price;
}

// Получить просто слово
function getWord(word) {
  return word;
}

// Получить просто число
function getNumber(number) {
  return number;
}

// ЗАДАЧА 4

// Функция удвоения зарплаты
function RaiseSalary(salary) {
  return salary * 2;
}

console.log(RaiseSalary(50000));

// Функция возвращает удвоенный вес
function ReiseWeight(weight) {
  return weight * 2;
}

console.log(ReiseWeight(75));

// Функция удвоения времени
function RaiseTime(time) {
  return time * 2;
}

console.log(RaiseTime(15));

// Функция удвоения денег
function RaiseMoney(money) {
  return money * 2;
}

console.log(RaiseMoney(100));

// Функция удвоения оперативной памяти
function RaiseRam(ram) {
  return ram * 2;
}

console.log(RaiseRam(8));

// ЗАДАЧА 5

// функция возвращает первый эллемент массива
function firstElement(data) {
  return data[0];
}
// Вывод в консоль
console.log(firstElement([30, 95, 77]));

// ЗАДАЧА 6

// функция возвращает поледний эллемент массива
function lastElement(data) {
  return data[data.length - 1];
}
// Вывод в консоль
console.log(lastElement([30, 95, 77]));

// ЗАДАЧА 7

// Создание функцию которая принимает 2 аргумента (Имя и фамилия) и возвращает полное имя и фамилия
function printMyFullName(firstname, secondname) {
  // Создание переменной и конкатенация 2х аргументов в новую переменную
  const fullname = `${firstname} ${secondname}`;

  // Возвращаем результат конкатенации
  return fullname;
}

// Вывод в консоль результат функции
console.log(printMyFullName("into", "code"));

// Создаем функцию получения суммы первого и последнего эллемента массив
function getSumOfFirstAndLastElement(arr) {
  if (arr.length < 2) {
    // Если длина массива меньше 2х Возвращаем текст и прерываем выполнение функции
    return "леее, минимум два элемента нужно жи есть";
  } else {
    // Иначе получаем последний эллемент массива и присваиваем в переменную
    const lastIndex = arr.length - 1;

    // Возврашаем сумму первого и последнего эллемента массива
    return arr[0] + arr[lastIndex];
  }
}

// Вызываем функцию передавая пустой массив
console.log(getSumOfFirstAndLastElement([]));

// Вызываем функцию с параметром масива
console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));

// ЗАДАЧА 8

let text = "css";

function testVariableScope() {
  let text = "html";

  return text;
}

console.log(testVariableScope());

/*
    Данная функция возврашает "html" так как область видимости переменной text локальна по отношении к вызываемой функции, она содается в этой функции и ее же возвращает
*/

// ЗАДАЧА 9

console.log(addToNumbers(4, 8));

function addToNumbers(x, y) {
  return x + y;
}

/*
    Первый этап компиляции полуает все объявления функции, код не выполняется. Второй этап выполняется код.
*/
