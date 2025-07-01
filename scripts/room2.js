// List of plaintext and keywords
const messages = [
  { text: "THE SECRET", keyword: "KEY" },
  { text: "VIGENERE CIPHER", keyword: "LOCK" },
  { text: "ESCAPE ROOM", keyword: "CODE" },
  { text: "DECRYPT THIS", keyword: "HINT" },
  { text: "FIND THE EXIT", keyword: "DOOR" }
];

// Pick a random message-keyword pair
const choice = messages[Math.floor(Math.random() * messages.length)];
const plaintext = choice.text.toUpperCase();
const keyword = choice.keyword.toUpperCase();

// Vigenère cipher encryption function
function vigenereEncrypt(text, key) {
  let result = "";
  const A = "A".charCodeAt(0);
  for (let i = 0, j = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);
    if (c >= A && c <= A + 25) {
      let shift = key.charCodeAt(j % key.length) - A;
      let enc = ((c - A + shift) % 26) + A;
      result += String.fromCharCode(enc);
      j++;
    } else {
      result += text[i];
    }
  }
  return result;
}

// Encrypt the plaintext
const ciphertext = vigenereEncrypt(plaintext, keyword);

// Show ciphertext and keyword in the UI
document.getElementById("ciphertext").textContent = ciphertext;
document.getElementById("keyword-display").textContent = keyword;
document.getElementById("hint-answer").textContent = plaintext;

// Result message element
const msg = document.getElementById("result-msg");

// Hint buttons
const hint1Btn = document.getElementById("hint1-btn");
const hint2Btn = document.getElementById("hint2-btn");
const hint3Btn = document.getElementById("hint3-btn");

// Disable hints 2 and 3 initially
hint2Btn.disabled = true;
hint3Btn.disabled = true;

// Hide all hints initially
document.getElementById("hint-1").classList.add("hidden");
document.getElementById("hint-2").classList.add("hidden");
document.getElementById("hint-3").classList.add("hidden");

// Hint button event listeners
hint1Btn.addEventListener("click", () => {
  document.getElementById("hint-1").classList.remove("hidden");
  hint1Btn.disabled = true;
  hint2Btn.disabled = false;
});

hint2Btn.addEventListener("click", () => {
  document.getElementById("hint-2").classList.remove("hidden");
  hint2Btn.disabled = true;
  hint3Btn.disabled = false;
});

hint3Btn.addEventListener("click", () => {
  document.getElementById("hint-3").classList.remove("hidden");
  hint3Btn.disabled = true;
});

// Check user input
function checkAnswer() {
  const input = document.getElementById("user-input").value.toUpperCase().trim();
  if (input === plaintext) {
    msg.textContent = "✅ Correct! Moving to Room 3...";
    msg.style.color = "lightgreen";
    setTimeout(() => {
      window.location.href = "room3.html";
    }, 2000);
  } else {
    msg.textContent = "❌ Incorrect. Try again.";
    msg.style.color = "red";
  }
}
