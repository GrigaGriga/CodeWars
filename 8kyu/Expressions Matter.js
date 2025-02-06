function expressionMatter1(a, b, c) {
  let num1 = a + b + c;
  let num2 = a * b * c;
  let num3 = a + b * c;
  let num4 = a * b + c;
  let num5 = (a + b) * c;
  let num6 = a * (b + c);
  let res = Math.max(num1, num2, num3, num4, num5, num6);
  return res;
}
