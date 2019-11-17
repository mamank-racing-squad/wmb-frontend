const initialState = {
    orderForm: {
        costumerName: "",
        totalCostumer: "",
        description: "",
        idDiningTable: "",
        numberDiningTable: "Select Table",
        capacity: "Select Table"
    },
    orderDetails: [],
    orderToPaid:{}
};

export function menuOrderReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_SELECTED_MENU':
            return {...state, orderDetails: state.orderDetails.concat([{...action.payload}])};
        case 'REMOVE_SELECTED_MENU':
            return {...state, orderDetails: state.orderDetails.filter(element => element.idMenu !== action.idMenu)};
        case 'ADD_SELECTED_TABLE':
            return {...state, orderForm: {...state.orderForm, numberDiningTable: action.payload.numberDiningTable, idDiningTable: action.payload.idDiningTable, capacity: action.payload.capacity}};
        case 'REMOVE_SELECTED_TABLE':
            return {...state, orderForm: {...state.orderForm, idDiningTable: "", numberDiningTable: "Select Table", capacity: "Select Table"}};
        case 'HANDLE_COSTUMER_NAME_ORDER':
            return {...state, orderForm: {...state.orderForm, costumerName: action.payload}};
        case 'HANDLE_TOTAL_COSTUMER_ORDER':
            return {...state, orderForm: {...state.orderForm, totalCostumer: action.payload}};
        case 'HANDLE_NUMBER_DINING_TABLE_ORDER':
            return {...state, orderForm: {...state.orderForm, totalCostumer: action.payload}};
        case 'HANDLE_DESCRIPTION_ORDER':
            return {...state, orderForm: {...state.orderForm, description: action.payload}};
        case 'CLEAR_LIST_MENU':
            return {...state, orderDetails: [], orderForm: {...state.orderForm, costumerName: "", totalCostumer: "", idDiningTable: "", numberDiningTable: "Select Table", capacity: "Select Table", description: ""}};
        case 'INCREMENT_AMOUNT_MENU':
            return {...state, orderDetails: state.orderDetails.map((element, index) => index===action.index ? {...element, element: element.amount += 1} : element)};
        case 'DECREMENT_AMOUNT_MENU':
            return {...state, orderDetails: state.orderDetails.map((element, index) => index===action.index ? {...element, element: element.amount -= 1} : element)};
        case 'FETCHING_ORDER_DETAIL_SUCCESS' :
            return {...state, orderToPaid: action.payload};
        default: return {...state};
    }
}