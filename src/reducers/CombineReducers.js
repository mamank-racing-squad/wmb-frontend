import { combineReducers } from 'redux'
import {dealDrinks, dealFoods, dealSelectedItem } from "./CashierReducer";
import {menuCategoryReducer} from "../components/admin/menu-category/MenuCategoryReducer";
import {menuReducer} from "../components/admin/menu/MenuReducer";
import {diningTableReducer} from "../components/admin/dining-table/DiningTableReducer";

export const reducers = combineReducers({
    selectedItem: dealSelectedItem,
    foods: dealFoods,
    drinks: dealDrinks,
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
});