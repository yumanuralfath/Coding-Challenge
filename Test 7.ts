type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}

//example
const num = [1, 2, 3, 4];

const fn: Fn = function sum(accum, curr) {
  return accum + curr;
};

const init = 0;

// expect result 10
/*
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
*/
console.log(reduce(num, fn, init));
