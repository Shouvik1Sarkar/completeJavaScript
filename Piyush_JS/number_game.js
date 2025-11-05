const a = Number(alert("Enter a number"));

const r = Math.random() * 9 + 1;
console.log(r);
console.log(Math.floor(r));
if (a == r) {
  console.log("Numbers matched");
} else {
  console.log("Nah it failed");
}
