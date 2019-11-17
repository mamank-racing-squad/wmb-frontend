import { combineReducers } from 'redux'
import {menuOrderReducer} from "./CashierReducer";
import {menuCategoryReducer} from "./MenuCategoryReducer";
import {menuReducer} from "./MenuReducer";
import {diningTableReducer} from "./DiningTableReducer";
import {paymentReducer} from "./PaymentReducer";
import {reportReducer} from "./ReportReducer";

export const reducers = combineReducers({
    orderReducer: menuOrderReducer,
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
    reportReducer,
    paymentReducer,

});