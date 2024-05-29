type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

const fx = compose([(x) => x + 1, (x) => 2 * x]);

// console.log(fx(4)); // 9
fx(4);