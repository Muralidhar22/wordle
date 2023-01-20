
import { useThemeContext } from "../contexts/ThemeContext";

import { FaRegMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";

const Navbar = () => {
    const { theme, switchTheme } = useThemeContext()
    
    return(
        <nav>
            <header>
                <h1>Wordle</h1>
            </header>
            <div className="theme-switch-icon">
                {
                    theme === 'dark' && (
                <button className="theme-switch" onClick={() => switchTheme('light')}>
                    <span>
                        <FaRegMoon color="white" />
                    </span>
                </button>
                    )
                }
                {
                    theme === 'light' && (
                        <button className="theme-switch" onClick={() => switchTheme('dark')}>
                        <span>
                            <HiOutlineSun />
                        </span>
                    </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar;