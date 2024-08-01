import { createSlice } from "@reduxjs/toolkit";

export const activeNavSlice = createSlice({
  name: "globalActiveNavState",
  initialState: {
    activeNavState: 0,
  },
  reducers: {
    updateActiveNavState: (state, action) => {
      state.activeNavState = action.payload;
    },
  },
});
export const { updateActiveNavState } = activeNavSlice.actions;
export default activeNavSlice.reducer;
