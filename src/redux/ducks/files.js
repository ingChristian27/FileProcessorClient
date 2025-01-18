import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../../services";

const initialState = {
  files: [],
  loading: false,
  error: null,
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    fetchFilesStart: (state) => {
      state.loading = true;
    },
    fetchFilesSuccess: (state, action) => {
      state.loading = false;
      state.files = action.payload;
    },
    fetchFilesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFilesStart, fetchFilesSuccess, fetchFilesFailure } =
  filesSlice.actions;

export const fetchFiles =
  (fileName = "") =>
  async (dispatch) => {
    dispatch(fetchFilesStart());
    try {
      const files = await getFiles(fileName);
      dispatch(fetchFilesSuccess(files));
    } catch (error) {
      dispatch(fetchFilesFailure(error.message));
    }
  };

export default filesSlice.reducer;
