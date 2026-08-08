export function DiagnosisResult(mood) {
  const results = {
    good: {
      title: "Aap surprisingly theek ho.",
      message: "Department ko abhi aapke case me zyada mehnat nahi karni padegi. 😌"
    },

    okay: {
      title: "Case mildly concerning hai.",
      message: "Aap technically theek ho... lekin system ko restart ki zarurat lag rahi hai. 😐"
    },

    bad: {
      title: "Case serious category me aa gaya hai.",
      message: "Aapka mood recovery department ne officially notice kar liya hai. 😭"
    },

    terrible: {
      title: "Emergency Mood Recovery Required.",
      message: "Situation dekhkar department ne chai ka emergency protocol activate kar diya hai. 💀"
    }
  };

  const result = results[mood];

  return `
    <main class="diagnosis-result">

      <div class="department-seal">
        <span class="seal-icon">✦</span>
        <span class="seal-text">MRD™</span>
      </div>

      <p class="eyebrow">
        DIAGNOSIS REPORT
      </p>

      <h1 class="title">
        ${result.title}
      </h1>

      <p class="subtitle">
        ${result.message}
      </p>

      <button class="primary-btn" id="continue-result">
        Continue 👉
      </button>

    </main>
  `;
}