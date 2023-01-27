import { useAppContext } from '../contexts/AppContext';

const Box = ({ row, col, value }) => {
  const { boardElementsStatus } = useAppContext();
  const status = boardElementsStatus[`row_${row}_col_${col}`].status;
  const isPresent = Boolean(value);

  return (
    <div
      className={`box box-${col}`}
      data-complete={status ? true : false}
      data-status={status}
      data-contain={isPresent}
    >
      <span className="box-value">{value}</span>
    </div>
  );
};

export default Box;
