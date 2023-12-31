/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

const arr = [];
const number = () => Math.ceil(Math.random() * (9 - 1) + 1);
for (let i = 0; i < 5; i++) {
  arr[i] = number();
}
console.log(arr);
// 1
let sum = 0;
arr.forEach((x) => (sum += x));
console.log(sum);
// 2
const minNumber = Math.min(...arr);
console.log(minNumber);
// 3
let numberSerch = 3;
const isSerch = arr.includes(numberSerch);
console.log(
  isSerch
    ? `Число ${numberSerch} в заданном массиве присутствует`
    : `Число ${numberSerch} в заданном массиве отсутствует`
);
