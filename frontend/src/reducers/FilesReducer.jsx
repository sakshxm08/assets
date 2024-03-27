export const FilesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        files: action.payload,
      };
    case "ADD":
      return {
        ...state,
        files: [action.payload, ...state.files],
      };
    default:
      return state;
  }
};
