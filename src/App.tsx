import { useCallback, useEffect, useState } from "react"
import words from "./assets/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  const getWord = () => words[Math.floor(Math.random() * words.length)]

  const [wordToGuess, setWordToGuess] = useState<string>(() => getWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(prev => [...prev, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  /* Handle letter keys */
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

  /* Handle Enter → restart game */
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
        marginTop: "-4rem"
      }}
    >
      {/* Game status */}
      <div style={{ fontSize: "2rem", textAlign: "center", minHeight: "3rem" }}>
        {isWinner && "🎉 You Won!"}
        {isLoser && "💀 Game Over"}
      </div>


      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      {/* Refresh word */}
      { (
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
      )}

      <HangmanWord
        reveal={isLoser}
        isWinner={isWinner}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />

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
