import { useState } from "react";
import Keyboard from "@/components/Hangman/Keyboard/Keyboard";
import steps from "@/components/Hangman/steps";
import generateRandomWord from "@/components/Hangman/words";
import "./Hangman.scss";

const MAX_WRONG = 6;

function Hangman() {
  const [nWrong, setNWrong] = useState(0);
  const [guessed, setGuessed] = useState({});
  const [answer, setAnswer] = useState(generateRandomWord());

  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as HTMLInputElement;
    const ltr = target.value;
    setGuessed((state) => ({ ...state, [ltr]: ltr }));
    setNWrong((state) => state + (answer.includes(ltr) ? 0 : 1));
  };

  const isLetterIncluded = (letter: string, target: object) => target.hasOwnProperty(letter);

  const generateGuessedWord = () =>
    answer.split("").map((letter) => (isLetterIncluded(letter, guessed) ? letter : "_"));

  const reset = () => {
    setNWrong(0);
    setGuessed({});
    setAnswer(generateRandomWord);
  };

  const isLooser = nWrong >= MAX_WRONG;
  const isWinner = generateGuessedWord().join("") === answer;

  let gameState: JSX.Element | string = (
    <Keyboard
      onLetterClick={handleGuess}
      isLetterDisabled={(letter: string) => isLetterIncluded(letter, guessed)}
    />
  );
  if (isLooser) gameState = "You Lose!";
  if (isWinner) gameState = "You Win!";

  return (
    <section className="hangman">
      <div className="hangman__container container">
        <h1 className="heading-primary u-center">Hangman</h1>
        <img
          className="hangman__step-image"
          src={steps[nWrong]}
          alt={`Hangman step - ${steps[nWrong]}`}
        />
        <h3 className="heading-tertiary u-center">
          Wrong Guesses Count: <span>{nWrong}</span>
        </h3>
        <p className="hangman__word">
          {(isLooser || isWinner) && answer}
          {!(isWinner || isLooser) && generateGuessedWord && generateGuessedWord()}
        </p>
        {gameState}
        <button type="button" className="hangman__reset-btn" onClick={reset}>
          Restart?
        </button>
      </div>
    </section>
  );
}

export default Hangman;
