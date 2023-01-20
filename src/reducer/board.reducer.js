const boardReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'change_box_value':
      const newElementsState = {
        ...state,
        boardElements: state.boardElements.map((row, rowIdx) =>
          row.map((value, colIdx) => {
            return payload.row === rowIdx && payload.col === colIdx
              ? payload.newValue
              : value;
          })
        ),
      };
      return newElementsState;
    case 'change_box_status':
      const newStatusState = {
        ...state,
        boardElementsStatus: {
          ...state.boardElementsStatus,
          [`row_${payload.row}_col_${payload.col}`]: {
            status: payload.status,
            isEditable: false,
          },
        },
      };
      return newStatusState;
    default:
      throw Error(`Unknown action: ${type}`);
  }
};

export default boardReducer;
