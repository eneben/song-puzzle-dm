import { Confetti } from "./Party.js";

console.clear();

const form = document.querySelector('[data-js="form"]');
const inputOne = document.querySelector('[data-js="input-1"]');
const inputTwo = document.querySelector('[data-js="input-2"]');
const inputThree = document.querySelector('[data-js="input-3"]');
const main = document.querySelector('[data-js="main"]');

const solutionOne = "1";
const solutionTwo = "2";
const solutionThree = "3";

window.onload = () => {
  scrollToTop();
  removeCard();
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputOneCorrect = inputOne.value === solutionOne;
  const inputTwoCorrect = inputTwo.value === solutionTwo;
  const inputThreeCorrect = inputThree.value === solutionThree;

  if (!inputOneCorrect) {
    inputOne.focus();
  } else if (!inputTwoCorrect) {
    inputTwo.focus();
  } else if (!inputThreeCorrect) {
    inputThree.focus();
  }

  inputOne.classList.remove("input-error");
  inputTwo.classList.remove("input-error");
  inputThree.classList.remove("input-error");

  if (!inputOneCorrect) {
    inputOne.classList.add("input-error");
  } else {
    inputOne.classList.add("input-correct");
  }

  if (!inputTwoCorrect) {
    inputTwo.classList.add("input-error");
  } else {
    inputTwo.classList.add("input-correct");
  }

  if (!inputThreeCorrect) {
    inputThree.classList.add("input-error");
  } else {
    inputThree.classList.add("input-correct");
  }

  let error = true;
  let heading = "";
  let description = "";
  let image = "";

  if (!inputOneCorrect && !inputTwoCorrect && !inputThreeCorrect) {
    heading = "Das war leider noch der falsche Ansatz:";
    description =
      "Alle drei Antworten sind falsch. Überlegt noch mal, das könnt Ihr besser!";
    image =
      "https://www.zooplus.de/magazin/wp-content/uploads/2022/10/traurige-katze-kaefig-768x513.jpg";
    newCard(heading, description, image, error);
  } else if (
    (inputOneCorrect && !inputTwoCorrect && !inputThreeCorrect) ||
    (!inputOneCorrect && inputTwoCorrect && !inputThreeCorrect) ||
    (!inputOneCorrect && !inputTwoCorrect && inputThreeCorrect)
  ) {
    heading = "Eine richtige Eingabe habt Ihr!";
    description =
      "Bei den anderen beiden müsst Ihr wohl noch mal nachzählen...";
    image =
      "https://img.freepik.com/premium-photo/many-cats-different-breeds-looking-camera_941600-10549.jpg";
    newCard(heading, description, image, error);
  } else if (
    (inputOneCorrect && inputTwoCorrect && !inputThreeCorrect) ||
    (inputOneCorrect && !inputTwoCorrect && inputThreeCorrect) ||
    (!inputOneCorrect && inputTwoCorrect && inputThreeCorrect)
  ) {
    heading = "Fast richtig.";
    description = "Einmal noch nachzählen bitte...";
    image =
      "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962.jpg";
    newCard(heading, description, image, error);
  } else if (inputOneCorrect && inputTwoCorrect && inputThreeCorrect) {
    error = false;
    heading = "Yay, Ihr habt es gelöst!";
    description = "Schnell freuen und Trinkpause, dann geht es schon weiter.";
    image =
      "https://static.wikia.nocookie.net/cutekittycats/images/a/ad/Caty.jpeg";
    newCard(heading, description, image, error);
  }
});

function newCard(heading, description, image, error) {
  removeCard();

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  newCard.innerHTML = `
    <h2 class="card-heading">${heading}</h2>
    <p class="card-description">${description}</p>
    <img class="card-image" src=${image} />
  `;

  if (error) {
    newCard.classList.add("card-error");
  } else {
    const button = document.createElement("button");
    button.classList.add("confetti");
    button.setAttribute("type", "button");
    button.innerText = "Konfetti 🎉";
    button.addEventListener("click", () => {
      Confetti();
    });
    newCard.append(button);
  }

  main.append(newCard);
  newCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removeCard() {
  const existingCard = document.querySelector(".card");
  if (existingCard) {
    existingCard.remove();
  }
}

// function createConfetti() {}

// TO DO'S:
// konfetti bei richtiger antwort
// Bei richtiger Antwort: neues Rätsel oder Code oderwieoderwas?

// PROBLEMS:
// hochscrollen funktioniert nicht, oder?
// diverse error-meldungen in der konsole, hilfe?!
