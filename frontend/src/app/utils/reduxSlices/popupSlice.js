import { createSlice } from "@reduxjs/toolkit";
export const popupSlice = createSlice({
  name: "popupState",
  initialState: {
    visibility: false,
    icon: "",
    text: "",
    iconColor: "",
    warningSign: "",
  },
  reducers: {
    updatePopupVisibility: (state, action) => {
      state.visibility = action.payload;
    },

    updatePopupIcon: (state, action) => {
      state.icon = action.payload;
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
    updateIconColor: (state, action) => {
      state.iconColor = action.payload;
    },
    updateWarningSign: (state, action) => {
      state.updateWarningSign = action.payload;
    },
  },
});
export const {
  updatePopupVisibility,
  updatePopupIcon,
  updateIconColor,
  updateText,
  updateWarningSign,
} = popupSlice.actions;
export default popupSlice.reducer;
