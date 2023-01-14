import { useAppContext } from "../contexts/AppContext";
import Box from "./Box.component";


const Board = () => {
    const { boardElements } = useAppContext()

   return(
    <div className="board-container">
        {
             boardElements.map((row, rowIdx) => (
              <>
                {
                    row.map((value, colIdx) => (
                        <Box
                            key={rowIdx+''+colIdx} 
                            value={value}
                            col={colIdx}
                            row={rowIdx}
                        />
                    ))
                }
                </>  
             ))   
        }
    </div>
   ) 
}

export default Board;