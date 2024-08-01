import { configureStore } from "@reduxjs/toolkit";
import globalNavState from "./reduxSlices/globalNavState";

export default configureStore({
  reducer: {
    globalNavState: globalNavState,
  },
});
