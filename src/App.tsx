import { useCallback, useEffect, useState } from "react"
import words from "./assets/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  /* Pick a random word from the word list */
  const getWord = () => words[Math.floor(Math.random() * words.length)]

  /* State: word to guess */
  const [wordToGuess, setWordToGuess] = useState<string>(() => getWord())

  /* State: all guessed letters */
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  /* Letters that are guessed but not in the word */
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  /* Game status */
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  /* Add a guessed letter */
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(prev => [...prev, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  /* Listen for A–Z key presses */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [addGuessedLetter])

  /* Press Enter to reset the game */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        margin: "0 auto 1rem",
        padding: "1rem",
        marginTop: "-4rem",
      }}
    >
      {/* Win / Lose message */}
      <div style={{ fontSize: "2rem", textAlign: "center", minHeight: "3rem" }}>
        {isWinner && "🎉 You Won!"}
        {isLoser && "💀 Game Over"}
      </div>

      {/* Hangman drawing */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      {/* Restart hint */}
      <div
        style={{
          fontSize: "1rem",
          color: "#555",
          marginTop: "-1rem",
          marginBottom: "1rem",
        }}
      >
        Press <b>Enter</b> to Refresh.
      </div>

      {/* Word display */}
      <HangmanWord
        reveal={isLoser}
        isWinner={isWinner}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />

      {/* On-screen keyboard */}
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  )
}

export default App