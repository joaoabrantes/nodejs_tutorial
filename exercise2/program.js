let arr = process.argv;
arr.splice(0,2);
console.log(sum(arr));

function sum(numbers) {
  let sum = 0;
  for(let number of numbers) {
    sum += Number(number);
  }
  return sum;
}
