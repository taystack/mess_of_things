const Factorial = (val) => {
  let factorial = 1;
  while (val > 1) {
    factorial *= val--;
  }
  return factorial;
};

export default Factorial;
