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

/*let num1 = Number(prompt("Введите 1 число   "));
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
func();*/

/*Задание 3 (тайминг 15 минут)
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции*/

/*let number = Number(prompt("Введите число   "));
function root(number) {
  return Math.sqrt(number);
}
root(number);
let num1 = root(3);
let num2 = root(4);
console.log(Number(num1 + num2));

let number2 = Number(prompt("Введите 2 число  "));
function sravn(number, number2) {
  if (number > number2) {
    console.log(number2);
  } else {
    console.log(number);
  }
}
sravn(number, number2);*/

/*Задание 4 (тайминг 25 минут)
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

let number = Number(prompt("Введите число от 1 до 7   "));
function week(number) {
  if (number >= 1 && number <= 7) {
    if (number == 1) {
      alert("Понедельник");
    }

    if (number == 2) {
      alert("Вторник");
    }

    if (number == 3) {
      alert("Среда");
    }
    if (number == 4) {
      alert("Четверг");
    }
    if (number == 5) {
      alert("Пятница");
    }
    if (number == 6) {
      alert("Суббота");
    }
    if (number == 7) {
      alert("Воскресенье");
    }
  } else {
    alert("Попробуйте еще раз...");
  }
}
week(number);

let time1 = new Date("December 22, 2023 22:24:00 +0300");
function setTime(name, time) {
  if (12 > time && time >= 4) {
    console.log(`Доброе утро ${name}`);
  } else if (20 > time && time >= 12) {
    console.log(`Добрый день ${name}`);
  } else if (23 > time && time >= 20) {
    console.log(`Добрый вечер ${name}`);
  } else {
    console.log(`Доброй ночи ${name}`);
  }
}
setTime("Мария", time1.getHours());
