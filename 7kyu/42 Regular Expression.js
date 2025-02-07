var regex = /\d{3}(?!\$)/g;

function addCommas(money, reg) {
  money = money.split("").reverse().join("");
  money = money.replace(regex, (x) => x + ",");
  money = money.split("").reverse().join("");
  return money;
}

console.log(addCommas("$1234567890"));
