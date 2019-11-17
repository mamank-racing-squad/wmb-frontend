const initialState={
    unpaidOrder:[],
    paymentInput:{
        pay:''
    },
    receipt:{},
    diningTable: {},
    orderDetails:[]
};

export function paymentReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCHING_ORDER_SUCCESS':
            return {...state, unpaidOrder: action.payload};
        case 'HANDLE_INPUT_PAY':
            return {...state, paymentInput: {...state.paymentInput, pay:action.pay}, receipt: {...state.receipt, change: action.change}};
        case 'RESET_PAYMENT_FORM':
            return {...state, paymentInput: {...state.paymentInput, pay:''}};
        case 'FETCHING_PAYMENT_SUCCESS':
            // return {...state, receipt: {...action.payload}, diningTable: {...action.payload.diningTable}, orderDetails: [...action.payload.orderDetails]};
        default: return {...state}
    }
}