var regex = new RegExp(
  "(https?://){1}[a-zA-Z0-9.]{1,}[].]{1}(com|net){1}",
  "gi"
);
var regex1 = new RegExp("^(https?://){1}");
var regex2 = new RegExp("[a-zA-Z0-9]+", "g");
var regex3 = new RegExp("(.com|.net){1}$");

console.log("http://wwwcodewarscom".match(regex));
//console.log(("http://codewars.com".replace(regex1, '')))
//console.log(("https://codewars.com".replace(regex1, '')))
//console.log(("http://codewars.com".replace(regex2, '')))
//console.log(("http://codewars.com".replace(regex3, '')))
