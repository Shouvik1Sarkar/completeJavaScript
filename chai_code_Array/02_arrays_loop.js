// for of loop

// const a = [1, 2, 3, 4, 5];
// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const a = "Shouvik";
// const a = { a: 1, b: 2, c: 3, d: 4 };
// for (const val of a) {
//   console.log("Val: ", val);
// }

//Map is similar to object but no duplicate values

const map = new Map();

map.set("a", "apple");
map.set("b", "ball");
map.set("c", "cat");
map.set("d", "dog");
// console.log(map);
// for (const key of map) {
//   console.log(key);
// }
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
for (const element of object) {
}
