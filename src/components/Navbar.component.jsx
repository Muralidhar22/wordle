import { useThemeContext } from '../contexts/ThemeContext';

import {
  FaRegMoon,
  FaQuestionCircle,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import { HiOutlineSun } from 'react-icons/hi';

const Navbar = ({ setIsModalDisplayed }) => {
  const { theme, switchTheme } = useThemeContext();

  const displayInfoModal = () => {
    setIsModalDisplayed(true);
  };

  return (
    <nav>
      <header>
        <h1>Wordle</h1>
      </header>
      <div className="theme-switch-icon">
        {theme === 'dark' && (
          <span className="nav-icons">
            <button className="info-button" onClick={displayInfoModal}>
              <FaRegQuestionCircle color="white" />
            </button>

            <button
              className="theme-switch"
              onClick={() => switchTheme('light')}
            >
              <span>
                <FaRegMoon color="white" />
              </span>
            </button>
          </span>
        )}
        {theme === 'light' && (
          <span className="nav-icons">
            <button className="info-button" onClick={displayInfoModal}>
              <FaQuestionCircle />
            </button>
            <button
              className="theme-switch"
              onClick={() => switchTheme('dark')}
            >
              <span>
                <HiOutlineSun />
              </span>
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
