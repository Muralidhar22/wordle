import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";

import { IoBackspaceOutline } from "react-icons/io5";
    import { IoMdBackspace} from "react-icons/io";

const KeyBoard = () => {
    const { keys, keysState } = useAppContext()
    const { theme } = useThemeContext()
    console.log(theme)
    return(<div className="keyboard" aria-label="keyboard">
        <div className="keyboard-row">
    {keys[0].map(keyValue => (
        <span key={keyValue} data-status={keysState[keyValue] && keysState[keyValue]} className="keyboard-key">{keyValue}</span>
    ))}     
        </div>
    <div className="keyboard-row">
     {keys[1].map(keyValue => (
        <span key={keyValue} data-status={keysState[keyValue] && keysState[keyValue]} className="keyboard-key">{keyValue}</span>
    ))} 
    </div>
    <div className="keyboard-row">
     <span className="keyboard-key">Enter</span>
     {
     keys[2].map(keyValue => (
        <span key={keyValue} data-status={keysState[keyValue] && keysState[keyValue]} className="keyboard-key">{keyValue}</span>
    ))}
        <span className="keyboard-key">
            {theme === 'light' && <IoBackspaceOutline />}
            {theme === 'dark' && <IoMdBackspace />}
        </span>
    </div>
    </div>)
}

export default KeyBoard;