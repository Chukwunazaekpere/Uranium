import { createStore, compose } from "redux";
import combinedReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const AppStore = createStore(
    combinedReducer,
    composeWithDevTools()
);

export default AppStore; 

