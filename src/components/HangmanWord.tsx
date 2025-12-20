type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
    isWinner?: boolean
}

const HangmanWord = ({
    guessedLetters,
    wordToGuess,
    reveal = false,
    isWinner = false,
}: HangmanWordProps) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.4em",
                fontSize: "clamp(2rem, 8vw, 6rem)",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginTop: "-3rem",
                marginBottom: "2rem",
                textAlign: "center",
                width: "99vw",
            }}
        >
            {/* Render each letter of the word */}
            {wordToGuess.split("").map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter)

                return (
                    <span
                        key={index}
                        style={{
                            borderBottom: "0.1em solid black",
                            minWidth: "1ch",
                            display: "inline-flex",
                            justifyContent: "center",
                        }}
                    >
                        <span
                            style={{
                                /* Show letter if guessed, game lost, or won */
                                visibility:
                                    isGuessed || reveal || isWinner ? "visible" : "hidden",

                                /* Color logic */
                                color: isWinner
                                    ? "green"
                                    : !isGuessed && reveal
                                        ? "red"
                                        : "black",
                            }}
                        >
                            {letter}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord
