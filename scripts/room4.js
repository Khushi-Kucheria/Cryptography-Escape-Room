// Five XOR puzzles: ciphertext hex, key hex, plaintext answer
const puzzles = [
  {
    plaintext: "OPEN",
    key:        "4A3C2D1B",
    ciphertext: "25697A77"
  },
  {
    plaintext: "DONE",
    key:        "1C7F4E23",
    ciphertext: "D25B2B51"
  },
  {
    plaintext: "TEST",
    key:        "5B3A297C",
    ciphertext: "4F4F4B08"
  },
  {
    plaintext: "CLUE",
    key:        "3F2A1D5E",
    ciphertext: "0C5B4C3B"
  },
  {
    plaintext: "ROOM",
    key:        "2E1C3B47",
    ciphertext: "5E5A4E2F"
  }
];

// Pick random puzzle
const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

// Show ciphertext and key on page
document.getElementById("ciphertext").textContent = puzzle.ciphertext;
document.getElementById("key").textContent = puzzle.key;

// Hint button elements
const hintButtons = [
  document.getElementById("hint1-btn"),
  document.getElementById("hint2-btn"),
  document.getElementById("hint3-btn"),
  document.getElementById("hint4-btn"),
  document.getElementById("hint5-btn")
];

// Hint content - beginner friendly step-by-step explanations
const hints = {
  1: `Hexadecimal Numbers:\n- Ciphertext and key are in hex (base 16).\n- Each hex digit = 4 bits.\n- Example: Hex "4E" is binary "01001110".`,

  2: `What is XOR?\n- XOR compares two bits:\n  Same bits → 0\n  Different bits → 1\n- Example: 1 XOR 0 = 1, 0 XOR 0 = 0`,

  3: `How to Decrypt:\n- XOR ciphertext byte with key byte to get original byte.\n- This reverses encryption.\n- Apply XOR to each pair of ciphertext and key bytes.`,

  4: `Convert to Characters:\n- Convert XOR result bytes to decimal.\n- Use ASCII table to find letters.\n- Example: decimal 65 = 'A'.`,

  5: `Answer:\n${puzzle.plaintext}`
};

// Show / Hide hint and enable next hint button logic
hintButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const hintNum = i + 1;
    const hintDiv = document.getElementById(`hint-${hintNum}`);
    hintDiv.textContent = hints[hintNum];
    hintDiv.classList.remove("hidden");

    btn.disabled = true;
    if (hintNum < hintButtons.length) {
      hintButtons[hintNum].disabled = false;
    }
  });
});

// Check user answer
document.getElementById("submit-btn").addEventListener("click", () => {
  const input = document.getElementById("user-input").value.trim();
  const msg = document.getElementById("result-msg");

  if (input.toUpperCase() === puzzle.plaintext.toUpperCase()) {
    msg.textContent = "✅ Correct! Moving on...";
    msg.style.color = "lightgreen";
    setTimeout(() => {
      window.location.href = "escaped.html"; // Update this path to your next page
    }, 2000);
  } else {
    msg.textContent = "❌ Incorrect. Try again.";
    msg.style.color = "red";
  }
});
