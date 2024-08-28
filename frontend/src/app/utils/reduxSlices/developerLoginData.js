import { createSlice } from "@reduxjs/toolkit";

export const developerLoginDataSlice = createSlice({
  name: "developerLoginData",
  initialState: {
    email: "",
    closePopup: "",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateClosePopup: (state, action) => {
      state.closePopup = action.payload;
    },
  },
});

export const { updateEmail } = developerLoginDataSlice.actions;

export default developerLoginDataSlice.reducer;
