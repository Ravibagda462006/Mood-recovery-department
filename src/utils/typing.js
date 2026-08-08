export function typeText(element, text, speed = 35) {
  return new Promise((resolve) => {
    let index = 0;

    element.textContent = "";

    const timer = setInterval(() => {
      element.textContent += text[index];
      index++;

      if (index >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}
export function resetState() {
  state.mood = null;
  state.recoveryChoice = null;
}