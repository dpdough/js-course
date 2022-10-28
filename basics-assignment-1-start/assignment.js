// const fictionalUserInput = 11;
// let resultVeriable;
// resultVeriable = fictionalUserInput + 18;
// resultVeriable = resultVeriable - 3;
// resultVeriable = resultVeriable * 2;
// resultVeriable = resultVeriable / 3;
// alert(resultVeriable);
// alert(fictionalUserInput);

const userInput = prompt('please eneter few numbers seperated by a comma', '');

let arrayStringUserInput = userInput.split(',');

let arrayNumberUserInput = arrayStringUserInput.map((string) => Number(string));

// console.log(userInput);
// console.log(arrayStringUserInput);
// console.log(arrayNumberUserInput);

// const filteredArray = arrayNumberUserInput.filter((a) => a > 5);

// console.log(filteredArray);

// const mapArray = arrayNumberUserInput.map(
//   (input) => {
//     const inputObj = { num: input };
//     return inputObj;
//   }
// );
// console.log(mapArray);

// const multiplyArray = arrayNumberUserInput.reduce(
//   (prevValue, curValue) => prevValue * curValue,
//   1
// );

// console.log(multiplyArray);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...arrayNumberUserInput));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...arrayNumberUserInput);

console.log(min, max);

const userIds = new Set();
userIds.add(2);
userIds.add(-10);
userIds.add(4);

console.log(userIds);
