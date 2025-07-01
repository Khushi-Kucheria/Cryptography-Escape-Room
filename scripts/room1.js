// Step 1: Randomly pick a plaintext
const plaintextOptions = [
  "SECRET FILES",
  "CRYPTOGRAPHY",
  "ESCAPE ROOM",
  "HELLO WORLD",
  "CAESAR CIPHER",
  "WELL DONE"
];

const plaintext = plaintextOptions[Math.floor(Math.random() * plaintextOptions.length)];

// Step 2: Generate a random Caesar shift (1–5)
const shift = Math.floor(Math.random() * 5) + 1;

// Step 3: Caesar encryption function
function caesarEncrypt(text, shift) {
  return text.toUpperCase().replace(/[A-Z]/g, char =>
    String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65)
  );
}

// Step 4: Encrypt and display
const ciphertext = caesarEncrypt(plaintext, shift);
document.getElementById("ciphertext").textContent = ciphertext;
document.getElementById("hint-answer").textContent = plaintext;

// Disable Hint 2 and Hint 3 buttons initially
const hint1Btn = document.getElementById("hint1-btn");
const hint2Btn = document.getElementById("hint2-btn");
const hint3Btn = document.getElementById("hint3-btn");

hint2Btn.disabled = true;
hint3Btn.disabled = true;

hint1Btn.addEventListener("click", () => {
  // Show hint 1 text
  document.getElementById("hint-1").classList.remove("hidden");
  hint1Btn.disabled = true;
  hint2Btn.disabled = false;
});

hint2Btn.addEventListener("click", () => {
  // Show hint 2 text
  document.getElementById("hint-2").classList.remove("hidden");
  hint2Btn.disabled = true;
  hint3Btn.disabled = false;
});

hint3Btn.addEventListener("click", () => {
  // Show hint 3 text (the answer)
  document.getElementById("hint-3").classList.remove("hidden");
  hint3Btn.disabled = true;
});

function checkAnswer() {
  const input = document.getElementById("user-input").value.toUpperCase().trim();
  const msg = document.getElementById("result-msg");
  if (input === plaintext) {
    msg.textContent = "✅ Correct! Moving to Room 2...";
    msg.style.color = "lightgreen";
    setTimeout(() => {
      window.location.href = "room2.html";
    }, 2000);
  } else {
    msg.textContent = "❌ Incorrect. Try again.";
    msg.style.color = "red";
  }
}

function toggleHint(n) {
  document.getElementById(`hint-${n}`).classList.toggle("hidden");
}
