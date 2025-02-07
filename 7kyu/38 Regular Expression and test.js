function findSimilarity(str, word) {
  let start = word[0];
  let end = word.slice(-1);
  let reg = new RegExp(start + "\\w".repeat(word.length - 2) + end, "g");
  return str
    .split(" ")
    .filter((a) => a.length === word.length)
    .join(" ")
    .match(reg) === null
    ? ""
    : str
        .split(" ")
        .filter((a) => a.length === word.length)
        .join(" ")
        .match(reg)
        .join(" ");
}

console.log(findSimilarity("bag dog dig dot doog dogs", "dog")); //should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dig")); //should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dot")); //should return "dot"
console.log(findSimilarity("bag dog dig dot doog dogs", "god")); //should return ""
