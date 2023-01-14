import { useAppContext } from "../contexts/AppContext";

const Box = ({ row, col, value }) => {
    const { boardElements, boardElementsStatus } = useAppContext();
    const status = boardElementsStatus[`row_${row}_col_${col}`].status
    const isEmpty = Boolean(value)
    
    return(
        <div className="box" data-status={status} data-contain={isEmpty}>
        <span>{value}</span>
    </div>
    )
}

export default Box;