/* Задание 4 (тайминг 30 минут)
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно */
const riddles = {
  question: "Ваш пароль?",
  answer: "123",
  count: 0,
  askQuestion: function () {
    let enter = prompt(this.question);
    if (enter === this.answer) {
      console.log("вы выграли");
    } else {
      console.log("вы проиграли");
      this.count++;
      if (this.count < 3) {
        this.askQuestion();
      }
    }
  },
};
riddles.askQuestion();
