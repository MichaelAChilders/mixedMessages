//Array of Knock Knock Jokes
const jokes = [
  "Broccoli? Broccoli who? Broccoli doesn't have a last name silly",
  "Amish. Amish who? Really? You don't look like a shoe!",
  "A little old lady. A little old lady who? I didn't know you could yodel!",
  "Mikey. Mikey who? Mike doesn't fit in the key hole!",
];

const punchLine = document.getElementsByClassName("punch-line");

const randomJoke = () => {
  const math = Math.floor(Math.random() * 4);
  return jokes[math];
};

console.log(randomJoke());
