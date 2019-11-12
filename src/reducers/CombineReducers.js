import { combineReducers } from 'redux'
import {menuOrderReducer} from "./CashierReducer";
import {menuCategoryReducer} from "../components/admin/menu-category/MenuCategoryReducer";
import {menuReducer} from "../components/admin/menu/MenuReducer";
import {diningTableReducer} from "../components/admin/dining-table/DiningTableReducer";

export const reducers = combineReducers({
    orderReducer: menuOrderReducer,
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
});