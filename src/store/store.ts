import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "./reducers/moviesReducer";
export const store = createStore(moviesReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof moviesReducer>;
