import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./ducks/files";

export const store = configureStore({
  reducer: {
    files: filesReducer,
  },
});
