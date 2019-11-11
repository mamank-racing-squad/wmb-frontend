import { combineReducers } from 'redux'
import {dealDrinks, dealFoods, dealSelectedItem } from "./CashierReducer";
import {menuCategoryReducer} from "../components/admin/menu-category/MenuCategoryReducer";

export const reducers = combineReducers({
    selectedItem: dealSelectedItem,
    foods: dealFoods,
    drinks: dealDrinks,
    menuCategoryReducer
});