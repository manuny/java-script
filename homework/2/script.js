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
