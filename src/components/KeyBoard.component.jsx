import { useAppContext } from '../contexts/AppContext';
import { useThemeContext } from '../contexts/ThemeContext';

import { IoBackspaceOutline } from 'react-icons/io5';
import { IoMdBackspace } from 'react-icons/io';

const KeyBoard = () => {
  const { keys, keysState, handleKeyPress } = useAppContext();
  const { theme } = useThemeContext();

  return (
    <div className="keyboard" aria-label="keyboard">
      <div className="keyboard-row">
        {keys[0].map((key) => (
          <span
            key={key}
            data-status={keysState[key] && keysState[key]}
            className="keyboard-key"
            onClick={() => handleKeyPress({ key })}
          >
            {key}
          </span>
        ))}
      </div>
      <div className="keyboard-row">
        {keys[1].map((key) => (
          <span
            key={key}
            data-status={keysState[key] && keysState[key]}
            className="keyboard-key"
            onClick={() => handleKeyPress({ key })}
          >
            {key}
          </span>
        ))}
      </div>
      <div className="keyboard-row">
        <span
          className="keyboard-key"
          onClick={() => handleKeyPress({ key: 'Enter' })}
        >
          Enter
        </span>
        {keys[2].map((key) => (
          <span
            key={key}
            data-status={keysState[key] && keysState[key]}
            className="keyboard-key"
            onClick={() => handleKeyPress({ key })}
          >
            {key}
          </span>
        ))}
        <span
          className="keyboard-key"
          onClick={() => handleKeyPress({ key: 'Backspace' })}
        >
          {theme === 'light' && <IoBackspaceOutline />}
          {theme === 'dark' && <IoMdBackspace />}
        </span>
      </div>
    </div>
  );
};

export default KeyBoard;
