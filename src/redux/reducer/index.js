import { OrderCake } from "./orderCake";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	cake: OrderCake
});

export default rootReducer;