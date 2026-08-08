export function Diagnosis() {
  return `
    <main class="diagnosis-screen">

      <div class="department-seal">
        <span class="seal-icon">✦</span>
        <span class="seal-text">MRD™</span>
      </div>

      <p class="eyebrow">
        EMOTIONAL DIAGNOSIS UNIT
      </p>

      <h1 class="title">
        Chalo, asli problem identify karte hain.
      </h1>

      <p class="subtitle">
        Pehle ye batao... aaj mood kitna kharab hai?
      </p>

      <div class="mood-options">

        <button class="mood-option" data-mood="good">
          😌 Theek-thaak
        </button>

        <button class="mood-option" data-mood="okay">
          😐 Bas chal raha hai
        </button>

        <button class="mood-option" data-mood="bad">
          😭 Bahut kharab
        </button>

        <button class="mood-option" data-mood="terrible">
          💀 Bilkul barbaad
        </button>

      </div>

      <button class="primary-btn" id="diagnosis-submit" disabled>
        Submit Diagnosis 👉
      </button>

    </main>
  `;
}
