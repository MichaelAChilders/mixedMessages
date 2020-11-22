//Array of Knock Knock Jokes
const jokes = [
  "Broccoli? Broccoli who? Broccoli doesn't have a last name silly",
  "Amish. Amish who? Really? You don't look like a shoe!",
  "A little old lady. A little old lady who? I didn't know you could yodel!",
  "Mikey. Mikey who? Mike doesn't fit in the key hole!",
];

//Elements
const button = document.querySelector(".button");

//Functions
const randomJoke = () => {
  const math = Math.floor(Math.random() * 4);
  return jokes[math];
};

button.addEventListener("click", function () {
  document.querySelector("span").innerHTML = randomJoke();
});
