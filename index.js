const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.getElementById('secondNumber');
const inputAction = document.getElementById('inputAction');
const out = document.querySelector('.output');
const btn = document.querySelector('.btn-flip');

const action = new Map([
  ['division', (x, y) => x / y],
  ['multiplication', (x, y) => x * y],
  ['plus', (x, y) => x + y],
  ['minus', (x, y) => x - y],
]);

//в данном методе не реализованы проверки
btn.onclick = () => {
  let value = inputAction.value;
  let x = +firstNumber.value;
  let y = +secondNumber.value;

  out.innerText = action.get(value)(x, y).toFixed(2);
};
