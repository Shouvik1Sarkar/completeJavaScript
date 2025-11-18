// const coding = ["py", "java", "js", "cpp", "c"];

// // coding.forEach((e) => console.log(e));
// // coding.forEach((e) => e);
// coding.forEach((item, index, arr) =>
//   console.log("ITEM: ", item, "|| INDEX:", index, "|| ARRAY LIST: ", arr)
// );

const lang_data_base = [
  {
    name: "Java Script",
    extension: "js",
  },
  {
    name: "Python",
    extension: "py",
  },
  {
    name: "C++",
    extension: "cpp",
  },
];

lang_data_base.forEach((item) => {
  console.log(item.name, "=", item.extension);
});
