console.clear();

const form = document.querySelector('[data-js="form"]');
const inputOne = document.querySelector('[data-js="input-1"]');
const inputTwo = document.querySelector('[data-js="input-2"]');
const inputThree = document.querySelector('[data-js="input-3"]');

const solutionOne = 1;
const solutionTwo = 2;
const solutionThree = 3;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form: ", form);
  console.log("inputOne: ", inputOne);
  console.log("inputOne.value: ", inputOne.value);
  if (inputOne.value !== solutionOne && inputTwo.value !== solutionTwo && inputThree.value !== solutionThree) {

    alert("Das war leider noch der falsche Ansatz: Alle drei Antworten sind falsch. Überlegt noch mal, das könnt Ihr besser!");
  } else if ((inputOne.value !== 1 && inputTwo.value !== solutionTwo) || (inputTwo.value !== solutionTwo && inputThree.value !== solutionThree) || (inputOne.value !== solutionOne && inputThree.value !== solutionThree)) {
    alert("Eine richtige Eingabe habt Ihr! Bei den anderen beiden müsst Ihr wohl noch mal nachzählen...");
  } else if (inputOne.value !== solutionOne || inputTwo.value !== solutionTwo || inputThree.value !== solutionThree) {
    alert("Fast richtig. Einmal noch nachzählen bitte..."); 
  } else if (inputOne.value === solutionOne && inputTwo.value === solutionTwo && inputThree.value === solutionThree) {
    alert("Yay, Ihr habt es gelöst!");
  };
});

function newCard()
//soll eine neue Karte unter den Videos auftauchen lassen mit Klassen und CSS und so, bisher ohne Inhalt. die website soll automatisch unter den button runterscrollen, so dass man die karte sieht.

function errorCard()
//soll das design der karte anpassen, solange noch eine falsche antwort gegeben wird zB rot. 

function solutionCard()
//soll das design der karte anpassen, wenn alles richtig angegeben wird, und weiteres rätsel oder lösung freigeben.


// TO DO
// Rote Umrandung von falschen Zahleneingaben - Designänderung von input elementen, error design
// Cursor soll in erste falsche reinspringen (focus)
