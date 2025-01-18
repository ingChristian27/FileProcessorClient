const SET_FILES = "SET_FILES";

// Action
export const setFiles = (files) => ({
  type: SET_FILES,
  payload: files,
});

// Reducer
const initialState = {
  files: [],
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
};

export default filesReducer;
