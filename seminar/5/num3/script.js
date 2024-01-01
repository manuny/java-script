/* Задание 3 (тайминг 15 минут)
const obj = {
key1: {
key1: 1,
key2: 2,
key3: 3,
},
key2: {
key1: 4,
key2: 5,
key3: 6,
},
key3: {
key1: 7,
key2: 8,
key3: 9,
},
}
Найдите сумму элементов приведенного объекта.*/
const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let sum = 0;
Object.values(obj).map(function (values) {
  Object.values(values).map(function (values) {
    sum = sum + values;
  });
});
console.log(sum);
