# Escape Room Cryptography Puzzle Game

Welcome to the **Escape Room Cryptography Puzzle Game** — a web-based interactive challenge designed to test your problem-solving and cryptography skills. Players progress through a series of rooms, each featuring a unique cipher or encryption technique to decrypt and escape.

---

## Game Description

This game simulates a digital escape room where players solve cryptographic puzzles in sequence. Each room introduces a new encryption scheme, with clues and hints guiding players to the solution. Successfully decrypt the ciphertext and enter the correct plaintext to advance to the next room — until you finally escape!

This project is perfect for anyone looking to learn or practice basic cryptography concepts in a fun, interactive way.

---

## Gameplay Overview

- **Four rooms total**: Each with a distinct cryptographic puzzle.
- Players **read the ciphertext and key (if provided)**, then **decrypt** the message.
- The player inputs the decrypted text to unlock the next room.
- If the answer is incorrect, players get feedback and can request hints.
- The game provides multiple hints gradually to help beginners.

---

## 🔍 Rooms Breakdown

| Room | Cipher Type         | Concept Used                                      |
|------|---------------------|---------------------------------------------------|
|  1 | Caesar Cipher       | Letters shifted by a fixed amount                |
|  2 | Vigenere Cipher     | Polyalphabetic cipher using a keyword to shift letters|
|  3 | RSA Decryption      | Small-prime RSA with manual calculation (p=5, q=11)|
|  4 | XOR Cipher Puzzle   | XOR of hex ciphertext with key (Mini AES-style)  |

---
### Room 1: Caesar Cipher
- **Concept:** Shift each letter by a fixed number down the alphabet.
- **Ciphertext:** Letters shifted by a secret offset (e.g., +3).
- **Goal:** Reverse the shift to reveal the original message.
- **Hints:** Alphabet mapping, examples of letter shifts.

### Room 2: Vigenère Cipher
- **Concept:** A polyalphabetic cipher using a keyword to shift letters variably.
- **Ciphertext:** Letters shifted according to repeating key letters.
- **Goal:** Use the key to reverse shifts and reveal the original message.
- **Hints:** How the key is applied, letter shifting examples, and how to align key and ciphertext.

### Room 3: Mini RSA Decryption
- **Concept:** Public-key encryption with small primes (p=5, q=11).
- **Ciphertext:** Numeric ciphertext encoded via RSA.
- **Goal:** Use RSA decryption formula with provided primes to recover plaintext.
- **Hints:** RSA basics, modular arithmetic, how to find private key.

### Room 4: XOR Cipher (Mini AES XOR puzzle)
- **Concept:** Byte-wise XOR of ciphertext and key in hex form.
- **Ciphertext/Key:** Hexadecimal strings.
- **Goal:** XOR ciphertext bytes with key bytes to reveal ASCII plaintext.
- **Hints:** Binary/hex conversion, XOR operation truth table, ASCII mapping.

---
