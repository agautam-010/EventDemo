import { Reducer, combineReducers } from "redux";
import { AppReducer, AppState } from "./app.reducers";

export interface RootState {
  App: AppState;
}

export const combinedReducers: Reducer<RootState> = combineReducers({
  App: AppReducer,
});
