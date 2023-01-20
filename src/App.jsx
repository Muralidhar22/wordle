import { useState } from 'react';

import Modal from './components/Modal.component';
import Navbar from './components/Navbar.component';
import Board from './components/Board.component';
import KeyBoard from './components/KeyBoard.component';
import { useAppContext } from './contexts/AppContext';

function App() {
  const { gameOver, message, won } = useAppContext();
  const [isModalDisplayed, setIsModalDisplayed] = useState(true);

  return (
    <div className="app">
      {isModalDisplayed && <Modal setIsModalDisplayed={setIsModalDisplayed} />}
      <Navbar setIsModalDisplayed={setIsModalDisplayed} />
      <main>
        {gameOver && (
          <span className="game-over-message">
            <span data-won={won ? true : false}>{message}</span>
          </span>
        )}
        <Board />
        <KeyBoard />
      </main>
    </div>
  );
}

export default App;
