import "./Key.scss";

interface KeyProps {
  letter: string;
  onLetterClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLetterDisabled: (letter: string) => boolean;
}

function Key({ letter, onLetterClick, isLetterDisabled }: KeyProps): JSX.Element {
  return (
    <button
      className="key"
      type="button"
      key={letter}
      value={letter}
      onClick={onLetterClick}
      disabled={isLetterDisabled(letter)}
    >
      {letter}
    </button>
  );
}

export default Key;
