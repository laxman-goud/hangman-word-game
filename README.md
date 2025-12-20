## 🪢 Hangman Game (React + TypeScript)

A classic **Hangman word-guessing game** built using **React**, **TypeScript**, and **Vite**.
Players guess letters using the keyboard or on-screen buttons before the hangman is fully drawn.

---

## 🚀 Live Demo

```
https://hangman-word-game-drab.vercel.app
```
---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **CSS**

---

## ✨ Features

* 🎯 Random word generation
* ⌨️ Physical keyboard support
* 🖱️ On-screen keyboard
* 🎨 Visual feedback for:

  * Correct letters
  * Incorrect letters
* 🏆 Win & Lose detection
* 🔄 Restart game using **Enter key**
* 📱 Fully responsive UI
* ⚡ Fast development with Vite + SWC


---

## 📂 Project Structure

```
src/
├── assets/
│   ├── wordList.json
│   └── Keyboard.module.css
├── components/
│   ├── HangmanDrawing.tsx
│   ├── HangmanWord.tsx
│   └── Keyboard.tsx
├── App.tsx
├── main.tsx
```

---

## 🧠 How the Game Works

* A random word is selected at the start.
* Each guessed letter is stored in state.
* Correct guesses reveal letters.
* Incorrect guesses increase the hangman count.
* The game ends when:

  * ✅ All letters are guessed → **Win**
  * ❌ 6 incorrect guesses → **Lose**
* Press **Enter** to start a new game.

---

## 🧑‍💻 Getting Started Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/laxman-goud/hangman-word-game.git
cd hangman-word-game
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

---

## ⌨️ Controls

* **A–Z** → Guess letters
* **Enter** → Restart the game

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

Inspired by the classic **Hangman** word game and built as a learning project to practice **React + TypeScript**.

---

### ⭐ If you like this project, don’t forget to star the repo!

---

