/*Задание 1 (тайминг 20 минут)
Текст задания
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.*/

//1
let arr = [1, 2, 3];
arr.forEach((value) => {
  console.log(value);
});

//2
let arr2 = [52, 4, 7, 55477, 85, 6, 258];
console.log(arr2.length);

//3
let arr3 = ["a", "b", "c"];
arr3[0] = 1;
arr3[1] = -2;
arr3[2] = -3;
console.log(arr3);

/*Задание 2 (тайминг 15 минут)
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.*/

//1
let arr4 = [1, 2, 3];
for (let i = 0; i < arr4.length; i++) {
  arr4[i]++;
}
console.log(arr4);

//2
const arr5 = [];
arr5[3] = "a";
arr5[8] = "b";
console.log(arr5.length);

//3
const arr6 = [1, 2, 3];
arr6.push(4, 5);
console.log(arr6);

//4
let arr7 = [52, 4, 7, 55477, 85];
arr7.splice(1, 2); // начиная с индекса 1, удалить 2 элемента
console.log(arr7);
console.log(arr7.length);
