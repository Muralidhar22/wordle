import { useAppContext } from '../contexts/AppContext';
import { useThemeContext } from '../contexts/ThemeContext';
import Key from './Key.component';

import { IoBackspaceOutline } from 'react-icons/io5';
import { IoMdBackspace } from 'react-icons/io';

const KeyBoard = () => {
  const { keys, handleKeyPress } = useAppContext();
  const { theme } = useThemeContext();

  return (
    <div className="keyboard" aria-label="keyboard">
      <div className="keyboard-row">
        {keys[0].map((key, idx) => (
          <Key key={key + idx} value={key} />
        ))}
      </div>
      <div className="keyboard-row">
        {keys[1].map((key, idx) => (
          <Key key={key + idx} value={key} />
        ))}
      </div>
      <div className="keyboard-row">
        <span
          className="keyboard-key"
          onClick={() => handleKeyPress({ key: 'Enter' })}
        >
          Enter
        </span>
        {keys[2].map((key, idx) => (
          <Key key={key + idx} value={key} />
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
