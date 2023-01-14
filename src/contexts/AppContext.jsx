import { useState, createContext, useContext, useEffect, useRef, useReducer } from "react";

import boardReducer from "../reducer/board.reducer";
import { data } from "../word-bank";

const ROW_COUNT = 6;
const COLUMN_COUNT = 5;
const INITIAL_BOARD_ELEMENTS = []
const INITIAL_BOARD_ELEMENTS_STATUS = {}
const keys = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
["a", "s", "d", "f", "g", "h", "j", "k", "l"],["z", "x", "c", "v", "b", "n", "m"]];

for (let row = 0; row < ROW_COUNT; row++) {
  INITIAL_BOARD_ELEMENTS[row] = []
  for (let col = 0; col < COLUMN_COUNT; col++) {
    INITIAL_BOARD_ELEMENTS[row][col] = ''
    INITIAL_BOARD_ELEMENTS_STATUS[`row_${row}_col_${col}`] = {
        status: null, isEditable: row === 0 ? true : false }
  }
}

const isKeyAnAlphabet = (key) => {
    key = key.toUpperCase()
    const result = keys[0].includes(key) || keys[1].includes(key) || keys[2].includes(key)
    return result;
}

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [ boardState, boardStateDispatch] = useReducer(boardReducer, { boardElements: INITIAL_BOARD_ELEMENTS, boardElementsStatus: INITIAL_BOARD_ELEMENTS_STATUS });
    const cursorPos = useRef({ row: 0, col: 0 });
    const [message, setMessage] = useState(null)
    const answer = useRef(null)
    const [gameOver, setGameOver] = useState(false)
    const [keysState, setKeysState] = useState({})

    useEffect(() => {
        if(gameOver) document.removeEventListener('keydown', handleKeyPress)
        else if(!gameOver) document.addEventListener('keydown',handleKeyPress)
        return () => {
           document.removeEventListener('keydown', handleKeyPress)
        }
    },[boardState,gameOver])
    
    useEffect(() => {
        answer.current = data[Math.floor(Math.random() * data.length)].split('')
        console.log(answer.current)
        return() => {
            answer.current = null
        }
    },[])
    
    const gameOverHandler = (message) => {
        setGameOver(true)
        setMessage(message)
    }
    
    const validateEnteredValue = () => {
        if(boardState.boardElements[cursorPos.current.row].every(value => Boolean(value))){
        const enteredWord = boardState.boardElements[cursorPos.current.row]
        const isValidWord = data.includes(enteredWord.join('').toLowerCase());
        const wordMatch =  []
        
        if(isValidWord) {
            enteredWord.forEach((value, idx) => {
                if(answer.current.includes(value) 
                &&
                answer.current[idx] === value ) {
                    boardStateDispatch({type: 'change_box_status', payload: { 
                        row: cursorPos.current.row,
                        col: idx,
                        status: 'correct'
                    }})
                    setKeysState((prev) => ({ ...prev, [value]: 'correct' }))
                    wordMatch[idx] = true
                } else if(answer.current.includes(value)) {
                    boardStateDispatch({type: 'change_box_status', payload: { 
                        row: cursorPos.current.row,
                        col: idx,
                        status: 'present'
                    }})
                    setKeysState((prev) => ({ ...prev, [value]: 'present' }))
                    wordMatch[idx] = false
                } else if(!answer.current.includes(value)) {
                    boardStateDispatch({type: 'change_box_status', payload: { 
                        row: cursorPos.current.row,
                        col: idx,
                        status: 'absent'
                    }})
                    setKeysState((prev) => ({ ...prev, [value]: 'absent' }))
                    wordMatch[idx] = false
                }
            })
            if(cursorPos.current.row === 5 || wordMatch.every(value => value)) {
                wordMatch.every(value => value)
                ? gameOverHandler('Genius')
                : gameOverHandler(answer.current)
            }
            cursorPos.current.row++
            cursorPos.current.col = 0
        } else {
            alert('is not in word list')
        }
      }
    }
    
    const clearBoxValue = () => {
        boardStateDispatch({ type: 'change_box_value', payload: {
            row: cursorPos.current.row,
            col: cursorPos.current.col - 1,
            newValue: ''
        } })
        cursorPos.current.col-1 >= 0 && cursorPos.current.col--
    }
    
    const handleKeyPress = ({ key }) => {
        if(cursorPos.current.row < 6 && !gameOver){
            if(key === 'Enter') { validateEnteredValue() }
            else if(key === 'Backspace') { clearBoxValue() }
            else if(cursorPos.current.col < 5 && isKeyAnAlphabet(key)){
                    boardStateDispatch({ type: 'change_box_value', payload: { row: cursorPos.current.row, col: cursorPos.current.col, newValue: key } })
                    cursorPos.current.col++
            }
        }
    }
    
    const value = {
        boardElements: boardState.boardElements,
        boardElementsStatus: boardState.boardElementsStatus,
        handleKeyPress,
        keysState,
        keys,
        message,
        gameOver
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
      }
      return context;
}

