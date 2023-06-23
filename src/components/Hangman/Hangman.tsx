import { useState } from "react";
import steps from "./steps";
import "./Hangman.scss";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const MAX_WRONG = 6;

function Hangman() {
  const [nWrong, setNWrong] = useState(0);
  const [guessed, setGuessed] = useState({});
  const [answer, setAnswer] = useState("animal");

  const gameOver = nWrong >= MAX_WRONG;

  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as HTMLInputElement;
    const ltr = target.value;
    setGuessed((state) => ({ ...state, [ltr]: ltr }));
    setNWrong((state) => state + (answer.includes(ltr) ? 0 : 1));
  };

  const generateGuessedWord = () =>
    answer.split("").map((ltr) => (guessed.hasOwnProperty(ltr) ? ltr : "_"));

  const generateButtons = () => {
    return ALPHABET.split("").map((ltr) => (
      <button
        className="hangman__btn"
        key={ltr}
        type="button"
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.hasOwnProperty(ltr)}
      >
        {ltr}
      </button>
    ));
  };

  return (
    <section className="hangman">
      <div className="hangman__container container">
        <h1 className="heading-primary u-center">Hangman</h1>
        <img className="hangman__image" src={steps[nWrong]} alt="step" />
        <div>{nWrong}</div>
        <p className="hangman__word">
        {!gameOver ? generateGuessedWord && generateGuessedWord() : answer}
        </p>
        <div className="hangman__btn-container">{generateButtons && generateButtons()}</div>
      </div>
    </section>
  );
}

export default Hangman;
