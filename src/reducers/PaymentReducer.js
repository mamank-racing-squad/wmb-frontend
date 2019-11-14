const initialState={
    unpaidOrder:[],
    paymentInput:{
        pay:''
    },
    receipt:{}
};

export function paymentReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCHING_ORDER_SUCCESS':
            return {...state, unpaidOrder: action.payload};
        case 'HANDLE_INPUT_PAY':
            return {...state, paymentInput: {...state.paymentInput, pay:action.pay}};
        case 'RESET_PAYMENT_FORM':
            return {...state, paymentInput: {...state.paymentInput, pay:''}};
        case 'FETCHING_ORDER_DETAIL_SUCCESS':
            return {...state, receipt: {...action.payload, diningTable: action.payload.diningTable}};
        default:
            return {...state}
    }
}