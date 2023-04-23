import { combineReducers } from "redux";
import project from "./project";
import displayOnOff from "./display";
import scrollOnOff from "./scroll";


const rootReducer = combineReducers({project, displayOnOff, scrollOnOff})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>