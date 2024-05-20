//2
let arr = [40, 100, 1000];

function tipCal(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let bill = arr[i];
    if (bill > 50 && bill < 300) {
      tip = bill + bill * 0.15;
      res.push(tip);
    } else {
      tip = bill + bill * 0.2;
      res.push(tip);
    }
  }
  return res;
}
console.log(tipCal(arr));
