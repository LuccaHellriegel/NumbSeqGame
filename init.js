const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const ids = ['A', 'B', 'C'];

const max = 10;
const min = 1;

const startValue = Math.floor(Math.random() * (max - min + 1) + min);

ids.forEach((id) => {
  writeVal(startValue, id + 'Out');
});