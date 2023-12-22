/*Задание 1 (тайминг 20 минут)
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.*/
//1

/*function userData(name, lastName, age) {
  alert(`Привет ${lastName} ${name} твой возраст ${age}`);
}
userData("Петр", "Петров", 35);
//2
let number = prompt("Введите число   ");
function square(number) {
  alert(`Квадрат ${number} равен ${number * number}`);
}
square(number);
//3
let num = prompt("Введите число   ");
function sravneniye(num) {
  if (num < 0) {
    console.log("------");
  } else {
    console.log("++++++");
  }
}
sravneniye(num);*/

/*Задание 2 (тайминг 15 минут)
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;


1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();*/

let num1 = Number(prompt("Введите 1 число   "));
let num2 = Number(prompt("Введите 2 число   "));
let num3 = Number(prompt("Введите 3 число   "));
function sum(num1, num2, num3) {
  alert(`Сумма чисел равена ${num1 + num2 + num3}`);
}
sum(num1, num2, num3);
let param1 = 1;
let param2 = 2;
let param3 = 3;
sum(param1, param2, param3);

function func(num = 5) {
  console.log(num * num);
}
func(2);
func(3);
func();
