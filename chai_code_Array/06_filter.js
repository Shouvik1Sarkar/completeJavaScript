const coding = ["py", "java", "js", "cpp", "c"];

const container = coding.forEach((e) => {
  return e;
});
// console.log("CONTAINER: ", container); // undefined
// for each does not return value

const my_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_nums = my_nums.filter((e) => e > 4);

console.log("NEW NUMS: ", new_nums);

const books = [
  {
    name: "The Silent Forest",
    description:
      "A mystery novel about a detective uncovering secrets hidden in an abandoned forest village.",
    genre: "Mystery",
    publish: 2015,
    edition: "1st",
  },
  {
    name: "Beyond the Stars",
    description:
      "A science fiction story of humanity's first encounter with an alien civilization.",
    genre: "Science Fiction",
    publish: 2018,
    edition: "2nd",
  },
  {
    name: "Whispers of Time",
    description:
      "A time-travel romance where two lovers meet across different centuries.",
    genre: "Romance",
    publish: 2020,
    edition: "1st",
  },
  {
    name: "Shadows of the Empire",
    description:
      "A fantasy epic about a fallen kingdom and the rise of a young warrior.",
    genre: "Fantasy",
    publish: 2012,
    edition: "3rd",
  },
  {
    name: "The Last Algorithm",
    description:
      "A techno-thriller involving an AI gone rogue and the programmer trying to stop it.",
    genre: "Thriller",
    publish: 2023,
    edition: "1st",
  },
  {
    name: "Worlds Apart",
    description:
      "A drama about two families from different cultures learning to coexist.",
    genre: "Drama",
    publish: 2016,
    edition: "1st",
  },
  {
    name: "Crimson Tides",
    description:
      "A pirate adventure filled with treasure hunts, sea monsters, and betrayal.",
    genre: "Adventure",
    publish: 2014,
    edition: "2nd",
  },
  {
    name: "Fragments of Light",
    description:
      "A philosophical novel exploring the meaning of consciousness and reality.",
    genre: "Philosophy",
    publish: 2019,
    edition: "1st",
  },
  {
    name: "The Hidden Code",
    description:
      "A cybersecurity thriller where a hacker uncovers a global conspiracy.",
    genre: "Tech Thriller",
    publish: 2021,
    edition: "1st",
  },
  {
    name: "Under the Blue Sky",
    description:
      "A slice-of-life story about friendship, dreams, and growing up in a small town.",
    genre: "Slice of Life",
    publish: 2017,
    edition: "1st",
  },
  {
    name: "Frozen Echoes",
    description:
      "A survival story set in the Arctic, where explorers uncover an ancient secret.",
    genre: "Adventure",
    publish: 2013,
    edition: "4th",
  },
  {
    name: "The Broken Compass",
    description:
      "A coming-of-age journey of a young boy lost in the wilderness.",
    genre: "Fiction",
    publish: 2011,
    edition: "1st",
  },
  {
    name: "Winds of Destiny",
    description:
      "A fantasy tale about elemental magic and the battle for the four kingdoms.",
    genre: "Fantasy",
    publish: 2022,
    edition: "1st",
  },
  {
    name: "City of Glass",
    description:
      "A dystopian story where society lives inside a transparent city under constant surveillance.",
    genre: "Dystopian",
    publish: 2015,
    edition: "2nd",
  },
  {
    name: "Echoes of the Mind",
    description:
      "A psychological thriller about a therapist dealing with a patient who knows too much about her.",
    genre: "Psychological Thriller",
    publish: 2020,
    edition: "1st",
  },
];

// const val = books.filter((book) => book.genre.toLowerCase() == "mystery");
const val = books.filter(
  (book) => book.genre.toLowerCase() == "fiction" && book.publish > 2000
);
console.log(val);
console.log(val.length);
