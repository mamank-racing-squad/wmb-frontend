const initialState={
    reports:[],
    details:[],
    totalIncome:''
};

export function reportReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCHING_PAYMENTS_SUCCESS':
            return {...state, reports: action.payload};
        case 'FETCHING_ORDER_BY_PAYMENTS_SUCCESS':
            return {...state, details: state.details.concat(action.payload)};
        case 'FETCHING_TOTAL_INCOME_SUCCESS':
            return {...state, totalIncome: action.payload}
        default:
            return {...state}
    }
}