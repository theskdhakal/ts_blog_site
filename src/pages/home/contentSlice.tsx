import { createSlice } from "@reduxjs/toolkit";
import { updatedContentData } from "./Home";

interface ContentState {
  contents: updatedContentData[];
}

const initialState: ContentState = {
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
