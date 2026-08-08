export function RecoveryResult(choice) {
  const plans = {
    peace: {
      title: "Sukoon Protocol™",
      message:
        "Department ne determine kiya hai ki tumhe abhi thoda pause aur mental peace chahiye.",
      action:
        "Aaj thoda slow down karo. Har problem ko aaj solve karna zaroori nahi hai."
    },

    motivation: {
      title: "Motivation Protocol™",
      message:
        "Department ke analysis ke according tumhe ek small push ki zarurat hai.",
      action:
        "Ek chhota kaam choose karo aur bas usse complete karo. Momentum wahi se start hoga."
    },

    distraction: {
      title: "Distraction Protocol™",
      message:
        "Department ne temporary distraction ko medically* acceptable solution declare kiya hai.",
      action:
        "Thoda music, walk, game ya favourite activity. Brain ko reset hone ka chance do."
    }
  };

  const plan = plans[choice] || plans.peace;

  return `
    <main class="recovery-result">

      <div class="department-seal">
        <span class="seal-icon">✦</span>
        <span class="seal-text">MRD™</span>
      </div>

      <p class="eyebrow">
        MOOD RECOVERY DEPARTMENT
      </p>

      <h1 class="title">
        ${plan.title}
      </h1>

      <p class="subtitle">
        ${plan.message}
      </p>

      <div class="result-card">

        <p>
          <strong>Official Department Advice:</strong>
        </p>

        <p>
          ${plan.action}
        </p>

      </div>

      <p class="disclaimer">
        *Not actually medical advice. Department ka budget limited hai. 😌
      </p>
       <button class="primary-button" id="finish-recovery"> Case Close Karein ✦
    </button>
    </main>
  `;
}