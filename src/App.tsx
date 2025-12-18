import { useState } from "react"
import words from "./assets/wordList.json"

function App() {
  const [ wordToGuess, setWordToGuess ] = useState<string>(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  const [ guessedLetters, setGuessedLetters ] = useState<string[]>([])
  
  return (
    <div>
      <h1>Hey World!</h1>
    </div>
  )
}

export default App
