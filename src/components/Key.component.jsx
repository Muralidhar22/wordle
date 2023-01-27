import { useEffect, useRef } from 'react';

import { useAppContext } from '../contexts/AppContext';

const Key = ({ value }) => {
  const { keysState, handleKeyPress } = useAppContext();
  const keyEl = useRef(null);

  useEffect(() => {
    if (keysState[value]) {
      setTimeout(() => {
        keyEl.current.setAttribute('data-status', keysState[value]);
      }, 1500);
    }
  }, [keysState]);

  return (
    <span
      className={`keyboard-key${!value ? ' empty' : ''}`}
      onClick={() => handleKeyPress({ key: value })}
      ref={keyEl}
    >
      {value}
    </span>
  );
};

export default Key;
