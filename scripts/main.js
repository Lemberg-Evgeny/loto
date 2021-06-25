const lotoBox = []; //Лотомат заполненный шарами от 1-totalBalls.  //lenght = 37, indexs = 0-36.
const strongestNum = [1, 2, 3, 4, 5, 6, 7];
const totalBalls = 37; //Кол-во шаров.
const counter = []; //Счётчик заполненный нулями длинной totalBalls.
const sCounter = [0, 0, 0, 0, 0, 0, 0];
const games = 10_000_000; //количество сиграных лотарей

for (let i = 0; i < totalBalls; i++) {
    lotoBox.push(i + 1); //Заполнение лотомата 37ю шарами.
}
// console.log("Лотомат с шарами: ", lotoBox);

for (let i = 0; i <= lotoBox.length - 1; i++) {
    counter.push(0); //Заполнение счётчика 37ю нулями.
}

for (let i = 0; i <= games; i++) {
    let numBall = lotoBox[Math.floor(Math.random() * lotoBox
        .length)]; //Случайный выпавший шар с номером из лотомата.
    let sNumBall = strongestNum[Math.floor(Math.random() * strongestNum.length)];
    counter[numBall - 1] += 1; //Увеличеваем значение в счётчике по индексу номера шара -1.
    sCounter[sNumBall - 1] +=
        1; //Увеличеваем значение в счётчике по индексу номера закрепляющего шара -1.
}

document.querySelector('.ball-last').innerHTML = `<span>${sCounter.indexOf(Math.max.apply(null, sCounter)) + 1}</span>`;

let sixNum = []
counter.map((val, index) => {
    sixNum.push({
        index,
        val
    })
});

sixNum.sort((i, v) => (i.val > v.val) ? 1 : (i.val === v.val) ? ((i.val > v.val) ? 1 : -1) : -1)
    .reverse();
sixNum.splice(6);
sixNum.sort((i, v) => (i.index > v.index) ? 1 : -1);

let ball = document.querySelectorAll('.ball');

for (let i = 0; i < sixNum.length; i++) {
    ball[i].innerHTML = `<span>${lotoBox[sixNum[i].index]}</span>`;
    document.getElementById('statistic_table').innerHTML += `
      <tr class="border-info shadow">
          <th scope="row" class="number_ball">${lotoBox[sixNum[i].index]}</th>
          <td>${sixNum[i].val}</td>
          <td>${games}</td>
     </tr>
    `;
}


console.log('Лотобокс', lotoBox);
console.log('Каунтер', counter);
console.log('6 выпавших', sixNum);
console.log('Закрепительный шар', sCounter);

const start = () => {
    window.location.reload();
}