let arr = [2, 1, 2];
let count = 0;
let lastGame = [];
let isOver = false;

function dynamicArray() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 3) + 1;
    arr[i] = num;
  }
  return arr;
}

function game() {
  let lastGame = [...arr];
  arr = [...dynamicArray()];

  if (arr.every((v, i) => v === lastGame[i]) && count < 3) {
    count++;
    if (count === 3) {
      isOver = true;
    }
    return console.log(`Porta ${count} Aberta`);
  }

  if (!isOver) {
    return console.log("Tente Novamente");
  }
}

for (let i = 0; i < 50; i++) {
  game();
}
