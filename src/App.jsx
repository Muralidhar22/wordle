import Modal from './components/Modal.component';
import Navbar from './components/Navbar.component';
import Board from './components/Board.component';
import KeyBoard from './components/KeyBoard.component';
import { useAppContext } from './contexts/AppContext';

function App() {
  const { gameOver, message } = useAppContext()
  console.log(gameOver, message)
  return (
  <div className="App">
    {/* <Modal /> */}
    <Navbar />
    { gameOver && <span className="wordle-answer">{message}</span> }
    <Board />
    <KeyBoard />
  </div>
  );
}

export default App;
