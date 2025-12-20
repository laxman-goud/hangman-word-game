type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    /* Head of the hangman */
    const HEAD = (
        <div
            style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                border: "10px solid black",
                position: "absolute",
                top: "50px",
                right: "-30px",
            }}
        />
    )

    /* Body */
    const BODY = (
        <div
            style={{
                width: "10px",
                height: "100px",
                background: "black",
                position: "absolute",
                top: "118px",
                right: 0,
            }}
        />
    )

    /* Arms */
    const RIGHT_ARM = (
        <div
            style={{
                width: "100px",
                height: "10px",
                background: "black",
                position: "absolute",
                top: "150px",
                right: "-100px",
                rotate: "-30deg",
                transformOrigin: "left bottom",
            }}
        />
    )

    const LEFT_ARM = (
        <div
            style={{
                width: "100px",
                height: "10px",
                background: "black",
                position: "absolute",
                top: "150px",
                right: "10px",
                rotate: "30deg",
                transformOrigin: "right bottom",
            }}
        />
    )

    /* Legs */
    const RIGHT_LEG = (
        <div
            style={{
                width: "100px",
                height: "10px",
                background: "black",
                position: "absolute",
                top: "208px",
                right: "-90px",
                rotate: "60deg",
                transformOrigin: "left bottom",
            }}
        />
    )

    const LEFT_LEG = (
        <div
            style={{
                width: "100px",
                height: "10px",
                background: "black",
                position: "absolute",
                top: "208px",
                right: 0,
                rotate: "-60deg",
                transformOrigin: "right bottom",
            }}
        />
    )

    /* Order in which body parts appear */
    const BODY_PARTS = [
        HEAD,
        BODY,
        RIGHT_ARM,
        LEFT_ARM,
        RIGHT_LEG,
        LEFT_LEG,
    ]

    return (
        <div style={{ position: "relative" }}>
            {/* Render body parts based on wrong guesses */}
            {BODY_PARTS.slice(0, numberOfGuesses)}

            {/* Gallows */}
            <div
                style={{
                    height: "50px",
                    width: "10px",
                    background: "black",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                }}
            />
            <div
                style={{ height: "10px", width: "250px", background: "black" }}
            />
            <div
                style={{ height: "400px", width: "10px", background: "black" }}
            />
            <div
                style={{ height: "10px", width: "250px", background: "black" }}
            />
        </div>
    )
}

export default HangmanDrawing