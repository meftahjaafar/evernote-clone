const initialState = {};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_NOTE':
      return payload;
    case 'CANCEL':
      return state;
    default:
      return state;
  }
};