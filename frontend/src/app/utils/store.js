import { configureStore } from "@reduxjs/toolkit";
import globalNavState from "./reduxSlices/globalNavState";
import developerLoginCredential from "./reduxSlices/developerLogin";

export default configureStore({
  reducer: {
    globalNavState: globalNavState,
    developerLoginCredential: developerLoginCredential,
  },
});
