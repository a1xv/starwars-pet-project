import {combineReducers, createStore as createStore} from "redux";
import {charactersReducer} from "./charactersReducer";

const rootReducer = combineReducers({
    characters: charactersReducer
})

export const store = createStore(rootReducer)