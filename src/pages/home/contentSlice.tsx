import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

const { reducer, actions } = contentSlice;
export const { setContents } = actions;

export default reducer;
