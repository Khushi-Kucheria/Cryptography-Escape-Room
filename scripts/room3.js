const rsaMessages = [
  {
    plaintext: "DOG",
    numbers: [3, 14, 6],
    publicKey: { e: 3, n: 55 },
    ciphertext: [27, 49, 51]
  },
  {
    plaintext: "CAT",
    numbers: [2, 0, 19],
    publicKey: { e: 3, n: 55 },
    ciphertext: [8, 0, 39]
  },
  {
    plaintext: "RUN",
    numbers: [17, 20, 13],
    publicKey: { e: 3, n: 55 },
    ciphertext: [18, 25, 52]
  },
  {
    plaintext: "TRY",
    numbers: [19, 17, 24],
    publicKey: { e: 3, n: 55 },
    ciphertext: [39, 18, 19]
  },
  {
    plaintext: "RSA",
    numbers: [17, 18, 0],
    publicKey: { e: 3, n: 55 },
    ciphertext: [18, 2, 0]
  }
];

// Pick one randomly
const data = rsaMessages[Math.floor(Math.random() * rsaMessages.length)];

document.getElementById("ciphertext").textContent = data.ciphertext.join(", ");
document.getElementById("public-key").textContent = `(${data.publicKey.e}, ${data.publicKey.n})`;
document.getElementById("hint-answer").textContent = data.plaintext;

const hintButtons = [
  document.getElementById("hint1-btn"),
  document.getElementById("hint2-btn"),
  document.getElementById("hint3-btn"),
  document.getElementById("hint4-btn"),
  document.getElementById("hint5-btn")
];

hintButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.getElementById(`hint-${i + 1}`).classList.remove("hidden");
    btn.disabled = true;
    if (i + 1 < hintButtons.length) {
      hintButtons[i + 1].disabled = false;
    }
  });
});

function checkAnswer() {
  const input = document.getElementById("user-input").value.toUpperCase().trim();
  const msg = document.getElementById("result-msg");

  if (input === data.plaintext) {
    msg.textContent = "✅ Correct! Moving to Room 4...";
    msg.style.color = "lightgreen";
    setTimeout(() => {
      window.location.href = "room4.html";
    }, 2000);
  } else {
    msg.textContent = "❌ Incorrect. Try again.";
    msg.style.color = "red";
  }
}
