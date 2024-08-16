import { configureStore } from "@reduxjs/toolkit";
import globalNavState from "./reduxSlices/globalNavState";
import developerLoginCredential from "./reduxSlices/developerLogin";
import popVisibility from "./reduxSlices/popupSlice";

export default configureStore({
  reducer: {
    globalNavState: globalNavState,
    developerLoginCredential: developerLoginCredential,
    popupState: popVisibility,
  },
});
