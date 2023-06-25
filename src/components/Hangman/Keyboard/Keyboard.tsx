import Key from "@/components/Hangman/Key/Key";
import "./Keyboard.scss";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

interface KeyboardProps {
  onLetterClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLetterDisabled: (letter: string) => boolean;
}

function Keyboard({ onLetterClick, isLetterDisabled }: KeyboardProps) {
  return (
    <div className="keyboard">
      {ALPHABET.split("").map((letter) => (
        <Key
          key={letter}
          letter={letter}
          onLetterClick={onLetterClick}
          isLetterDisabled={isLetterDisabled}
        />
      ))}
    </div>
  );
}

export default Keyboard;
