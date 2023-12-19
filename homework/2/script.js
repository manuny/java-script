/*Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/
let num1 = prompt("Введите 1 число");
let num2 = prompt("Введите 2 число");
if (num1 <= 1) {
  console.log(true);
} else {
  console.log(false);
}
if (num2 >= 3) {
  console.log(true);
} else {
  console.log(false);
}

/*Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}*/

let test = true;
test === true ? console.log("+++") : console.log("---");

/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

let day = prompt("Введите число от 1 до 31 ");
if (day >= 1 && day <= 31) {
  if (day >= 1 && day <= 10) {
    alert("Это первая декада");
  }

  if (day >= 11 && day <= 20) {
    alert("Это вторая декада");
  }

  if (day >= 21 && day <= 32) {
    alert("Это третья декада");
  }
} else {
  alert("Попробуйте еще раз...");
}

/*Задание 4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.*/

let num = prompt("Введите число ");
num = Number(num);
const hundreds = Math.trunc((num % 1000) / 100);
const dozens = Math.trunc((num % 100) / 10);
const pieces = Math.trunc(num % 10);

alert(`В числе ${num} количесвто сотен: ${hundreds},
 десятков: ${dozens}, единиц: ${pieces}`);
