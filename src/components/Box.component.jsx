import { useEffect, useRef } from 'react';
import { useAppContext } from '../contexts/AppContext';

const Box = ({ row, col, value }) => {
  const { boardElementsStatus } = useAppContext();
  const status = boardElementsStatus[`row_${row}_col_${col}`].status;
  const isPresent = Boolean(value);
  const boxEl = useRef(null);

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        boxEl.current.setAttribute('data-status', status);
      }, 300 * col);
    }
  }, [status]);

  return (
    <div
      ref={boxEl}
      className={`box box-${col}`}
      data-complete={status ? true : false}
      data-contain={isPresent}
    >
      <span className="box-value">{value}</span>
    </div>
  );
};

export default Box;
