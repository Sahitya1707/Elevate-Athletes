import { createSlice } from "@reduxjs/toolkit";

export const developerLoginCredentialSlice = createSlice({
  name: "developerLoginCredentials",
  initialState: {
    email: "",
    password: "",
    role: "",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
  },
});
export const { updateEmail, updatePassword, updateRole } =
  developerLoginCredentialSlice.actions;
export default developerLoginCredentialSlice.reducer;
