console.clear();

const form = document.querySelector('[data-js="form"]');
const inputOne = document.querySelector('[data-js="input-1"]');
const inputTwo = document.querySelector('[data-js="input-2"]');
const inputThree = document.querySelector('[data-js="input-3"]');
const main = document.querySelector('[data-js="main"]');
const solutionOne = "1";
const solutionTwo = "2";
const solutionThree = "3";

window.addEventListener("load", () => {
  scrollToTop();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputOneCorrect = inputOne.value === solutionOne;
  const inputTwoCorrect = inputTwo.value === solutionTwo;
  const inputThreeCorrect = inputThree.value === solutionThree;
  let error = true;
  let heading = "";
  let description = "";
  let image = "";

  console.log("form: ", form);
  console.log("inputOne: ", inputOne);
  console.log("inputOne.value: ", inputOne.value);
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
    alert(
      "Eine richtige Eingabe habt Ihr! Bei den anderen beiden müsst Ihr wohl noch mal nachzählen..."
    );
  } else if (
    (inputOneCorrect && inputTwoCorrect && !inputThreeCorrect) ||
    (inputOneCorrect && !inputTwoCorrect && inputThreeCorrect) ||
    (!inputOneCorrect && inputTwoCorrect && inputThreeCorrect)
  ) {
    alert("Fast richtig. Einmal noch nachzählen bitte...");
  } else if (inputOneCorrect && inputTwoCorrect && inputThreeCorrect) {
    error = false;
    alert("Yay, Ihr habt es gelöst!");
  }
});

function newCard(heading, description, image, error) {
  const newCard = document.createElement("article");
  newCard.classList.add("card");
  if (error) {
    newCard.classList.add("error");
  }
  newCard.innerHTML = `
    <h2 class="card-heading">${heading}</h2>
    <p class="card-description">${description}</p>
    <img class="card-image" src=${image} />
  `;
  main.append(newCard);
  newCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

// function errorCard()
//soll das design der karte anpassen, solange noch eine falsche antwort gegeben wird zB rot.

// function solutionCard()
//soll das design der karte anpassen, wenn alles richtig angegeben wird, und weiteres rätsel oder lösung freigeben.

// TO DO
// Rote Umrandung von falschen Zahleneingaben - Designänderung von input elementen, error design
// Cursor soll in erste falsche reinspringen (focus)
