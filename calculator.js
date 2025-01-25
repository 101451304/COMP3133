const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

export default { add, sub, mul, div };
