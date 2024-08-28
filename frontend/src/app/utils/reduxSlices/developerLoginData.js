import { createSlice } from "@reduxjs/toolkit";

export const developerLoginDataSlice = createSlice({
  name: "developerLoginData",
  initialState: {
    email: "",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { updateEmail } = developerLoginDataSlice.actions;

export default developerLoginDataSlice.reducer;
