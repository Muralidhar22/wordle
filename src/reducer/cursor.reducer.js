const cursorReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'increment_row':
      return state.row + 1 < 6 ? { ...state, row: state.row + 1 } : state;
    case 'increment_column':
      return state.col + 1 < 5 ? { ...state, col: state.col + 1 } : state;
    case 'reset_column':
      return { ...state, col: 0 };
    default:
      console.error('Invalid cursor state type');
      return state;
  }
};

export default cursorReducer;
