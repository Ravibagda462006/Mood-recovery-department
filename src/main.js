import "./styles/main.css";

import { Landing } from "./screens/Landing.js";
import { Reception } from "./screens/Reception.js";
import { Diagnosis } from "./screens/Diagnosis.js";
import { DiagnosisResult } from "./screens/DiagnosisResult.js";
import { Recovery } from "./screens/Recovery.js";
import { RecoveryResult } from "./screens/RecoveryResult.js";
import { CaseClosed } from "./screens/CaseClosed.js";

import { typeText } from "./utils/typing.js";
import { setMood, 
         getMood, 
         setRecoveryChoice, 
         getRecoveryChoice,
        resetState } from "./utils/state.js";

const app = document.querySelector("#app");


// ==========================
// Landing
// ==========================

function showLanding() {
  app.innerHTML = Landing();

  const startButton = document.querySelector(".primary-btn");

  startButton.addEventListener("click", showReception);
}


// ==========================
// Reception
// ==========================

function showReception() {
  app.innerHTML = Reception();

  const dialogue = document.querySelector("#reception-dialogue");
  const continueButton = document.querySelector("#continue-btn");

  typeText(
    dialogue,
    "Tension mat lo... hum aapki problem ko seriously lenge. Shayad.",
    35
  ).then(() => {

    continueButton.disabled = false;

    continueButton.addEventListener("click", showDiagnosis);

  });
}


// ==========================
// Diagnosis
// ==========================

function showDiagnosis() {
  app.innerHTML = Diagnosis();

  const moodOptions = document.querySelectorAll(".mood-option");
  const submitButton = document.querySelector("#diagnosis-submit");

  let selectedMood = null;


  moodOptions.forEach((option) => {

    option.addEventListener("click", () => {

      moodOptions.forEach((item) => {
        item.classList.remove("selected");
      });

      option.classList.add("selected");

      selectedMood = option.dataset.mood;

      setMood(selectedMood);

      submitButton.disabled = false;

    });

  });


  submitButton.addEventListener("click", () => {

    const mood = getMood();

    app.innerHTML = DiagnosisResult(mood);

    const continueButton =
      document.querySelector("#continue-result");

    continueButton.addEventListener("click", showRecovery);

  });
}


// ==========================
// Recovery
// ==========================


function showRecovery() {
  app.innerHTML = Recovery();

  const recoveryButton =
    document.querySelector("#recovery-start");

  const recoveryQuestion =
    document.querySelector("#recovery-question");

  recoveryButton.addEventListener("click", () => {

    recoveryQuestion.innerHTML = `
      <p class="subtitle">
        Ab ek important sawaal:
        aaj tumhe sabse zyada kis cheez ki zarurat hai?
      </p>

      <div class="recovery-options">

        <button class="mood-option" data-recovery="peace">
          😌 Thoda sukoon
        </button>

        <button class="mood-option" data-recovery="motivation">
          🔥 Thodi motivation
        </button>

        <button class="mood-option" data-recovery="distraction">
          😂 Thoda distraction
        </button>

      </div>
    `;

    recoveryButton.style.display = "none";

    const recoveryOptions =
      document.querySelectorAll(
        ".recovery-options .mood-option"
      );

    recoveryOptions.forEach((option) => {

      option.addEventListener("click", () => {

        recoveryOptions.forEach((item) => {
          item.classList.remove("selected");
        });

        option.classList.add("selected");

        setRecoveryChoice(option.dataset.recovery);

        recoveryQuestion
          .querySelector(".recovery-confirmation")
          ?.remove();

        recoveryQuestion
          .querySelector("#recovery-continue")
          ?.remove();

        recoveryQuestion.insertAdjacentHTML(
          "beforeend",
          `
            <p class="subtitle recovery-confirmation">
              Choice noted. Department aapke case par kaam shuru kar raha hai. 😌
            </p>

            <button
              class="primary-btn"
              id="recovery-continue"
            >
              Aage Badhein 👉
            </button>
          `
        );

        const recoveryContinue =
          document.querySelector("#recovery-continue");

        recoveryContinue.addEventListener("click", () => {
          const choice = getRecoveryChoice();

          app.innerHTML = RecoveryResult(choice);
const finishButton = document.querySelector("#finish-recovery");
 
          finishButton.addEventListener("click", () => {
            app.innerHTML = CaseClosed();
            const newCaseButton = document.querySelector("#new-case");
            newCaseButton.addEventListener("click", () => {
              resetState();
              showLanding();
            });
          });
        });

      });

    });

  });
}

// ==========================
// Start Application
// ==========================

showLanding();