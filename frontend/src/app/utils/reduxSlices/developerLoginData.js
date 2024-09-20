import { createSlice } from "@reduxjs/toolkit";

export const developerLoginDataSlice = createSlice({
  name: "developerLoginData",
  initialState: {
    email: "",
    closePopup: true,
    dashboardHeading: "Dashboard",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateClosePopup: (state, action) => {
      state.closePopup = action.payload;
    },
    updateDashboardHeading: (state, action) => {
      state.dashboardHeading = action.payload;
    },
  },
});

export const { updateEmail, updateClosePopup, updateDashboardHeading } =
  developerLoginDataSlice.actions;

export default developerLoginDataSlice.reducer;
