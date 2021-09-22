// 1. Напиши функцию, которая принимает 1 параметр - число, и возвращает строку четное оно или нечетное.
function getEvenOrOdd(x) {
  let str = "";
  if (typeof x !== "number") {
    return "Не число";
  }
  if (x % 2 === 0) {
    str = `${x} четное число`;
  } else {
    str = `${x} нечетное число`;
  }
  return str;
}

// 2. Напиши функцию, которая принимает один параметр - число и возвразаеь строку положительное оно или отрицательное.
function getPositiveOrNegative(number) {
  if (typeof number !== "number") {
    return "Не число!";
  }

  if (number >= 0) {
    return "Число положительное";
  } else {
    return "Число отрицательное";
  }
}

// 3. Напиши функцию, которая прининимает два параметра - числа и возвращает их произведение.
function multiplication(a, b) {
  return a * b;
}

// 4. Напиши функцию, которая прининимает два параметра - числа и возвращает наибольшее из них.
function multiplication(a, b) {
  if (a === b) {
    return "Числа равны";
  }
  return a > b ? a : b;
}

// 5. Напиши функцию, которая принимает один параметр - строку и возвращает количество символов в строке.
function getLengthOfString(str) {
  return str.length;
}

// 6. Напиши функцию, которая принимает два параметра - строки и возвращает ту, что длинее.
function getMaxLengthStr(firstStr, secondStr) {
  if (firstStr.length === secondStr.length) {
    return "Одинаковый размер строки";
  }
  return firstStr.length > secondStr.length ? firstStr : secondStr;
}

// 7. Напиши функцию, которая принимает два параметра строку и число - и возращает столько символов строки, сколько указано во втором параметре,
function getSliceStr(str, num) {
  return str.slice(0, num);
}

// 8. Доработай предыдущую функцию так, чтобы, если кол-во символо меньше второго параметра, функция возвращала "текст слишком коротки".
function getSliceStr(str, num) {
  if (str.length < num) {
    return "текст слишком короткий";
  }
  return str.slice(0, num);
}

// Тоже саммое только стрелоные

// 1. Напиши функцию, которая принимает 1 параметр - число, и возвращает строку четное оно или нечетное.
const getEvenOrOdd = (x) => {
  let str = "";
  if (typeof x !== "number") {
    return "Не число";
  }
  if (x % 2 === 0) {
    str = `${x} четное число`;
  } else {
    str = `${x} нечетное число`;
  }
  return str;
};

// 2. Напиши функцию, которая принимает один параметр - число и возвразаеь строку положительное оно или отрицательное.
const getPositiveOrNegative = (number) => {
  if (typeof number !== "number") {
    return "Не число!";
  }

  if (number >= 0) {
    return "Число положительное";
  } else {
    return "Число отрицательное";
  }
};

// 3. Напиши функцию, которая прининимает два параметра - числа и возвращает их произведение.
const multiplication = (a, b) => {
  return a * b;
};

// 4. Напиши функцию, которая прининимает два параметра - числа и возвращает наибольшее из них.
const multiplication = (a, b) => {
  if (a === b) {
    return "Числа равны";
  }
  return a > b ? a : b;
};

// 5. Напиши функцию, которая принимает один параметр - строку и возвращает количество символов в строке.
const getLengthOfString = (str) => {
  return str.length;
};

// 6. Напиши функцию, которая принимает два параметра - строки и возвращает ту, что длинее.
const getMaxLengthStr = (firstStr, secondStr) => {
  if (firstStr.length === secondStr.length) {
    return "Одинаковый размер строки";
  }
  return firstStr.length > secondStr.length ? firstStr : secondStr;
};

// 7. Напиши функцию, которая принимает два параметра строку и число - и возращает столько символов строки, сколько указано во втором параметре,
const getSliceStr = (str, num) => {
  return str.slice(0, num);
};

// 8. Доработай предыдущую функцию так, чтобы, если кол-во символо меньше второго параметра, функция возвращала "текст слишком коротки".
const getSliceStr = (str, num) => {
  if (str.length < num) {
    return "текст слишком короткий";
  }
  return str.slice(0, num);
};
