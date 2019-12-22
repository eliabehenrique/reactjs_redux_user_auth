import { createStore } from "redux";
import rootReducers from "../components/shared/rootReducers";

const store = createStore(rootReducers);

export default store;