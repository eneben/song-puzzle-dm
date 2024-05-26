console.clear();

const form = document.querySelector('[data-js="form"]');
const inputOne = document.querySelector('[data-js="input-1"]');
const inputTwo = document.querySelector('[data-js="input-2"]');
const inputThree = document.querySelector('[data-js="input-3"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form: ", form);
  console.log("inputOne: ", inputOne);
  console.log("inputOne.value: ", inputOne.value);
  if (inputOne.value !== 1 || inputTwo.value !== 2 || inputThree.value !== 3) {
  }
});

// TO DO
// Automatisches Scrollen bei Neuem Element unter Button
// Rote Umrandung von falschen Zahleneingaben
// Cursor soll in erste falsche reinspringen (focus)
// Bei richtiger Antwort Hinweise, bei falsche Antwort Oops
//
