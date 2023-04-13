import { combineReducers } from "redux";
import project from "./project";
import displayOnOff from "./display";


const rootReducer = combineReducers({project, displayOnOff})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>