import { combineReducers } from "redux";
import wishReducer from "./wish/wishReducer";

const rootReducer = combineReducers({
  wishList: wishReducer,
});

export default rootReducer;
