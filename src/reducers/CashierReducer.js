const initialState = {
    costumerName: "",
    totalCostumer: "",
    idDiningTable: "",
    orderDetails: [],
};

export function menuOrderReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_SELECTED_MENU':
            return {...state, orderDetails: state.orderDetails.concat([{...action.payload}])};
        case 'REMOVE_SELECTED_MENU':
            return {...state, orderDetails: state.orderDetails.filter(element => element.idMenu !== action.idMenu)};
        case 'CLEAR_LIST_MENU':
            return {...state, orderDetails: []};
        case 'INCREMENT_AMOUNT_MENU':
            return {...state, orderDetails: state.orderDetails.map((element, index) => index===action.index ? {...element, element: element.amount += 1} : element)};
        case 'DECREMENT_AMOUNT_MENU':
            return {...state, orderDetails: state.orderDetails.map((element, index) => index===action.index ? {...element, element: element.amount -= 1} : element)};
        default: return {...state};
    }
}