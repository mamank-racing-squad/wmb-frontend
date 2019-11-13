import { combineReducers } from 'redux'
import {menuOrderReducer} from "./CashierReducer";
import {menuCategoryReducer} from "./MenuCategoryReducer";
import {menuReducer} from "./MenuReducer";
import {diningTableReducer} from "./DiningTableReducer";

export const reducers = combineReducers({
    orderReducer: menuOrderReducer,
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
});