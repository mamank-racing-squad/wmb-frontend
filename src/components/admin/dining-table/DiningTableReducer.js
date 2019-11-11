
const initialState = {
    diningTables: [],
    diningTableForm : {
        idDiningTable: null,
        numberDiningTable: null,
        capacity: null
    }
};

export function diningTableReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_DINING_TABLE_SUCCESS':
            return {...state, diningTables: action.payload};
        case 'ADD_NEW_DINING_TABLE':
            return {...state, diningTables: state.diningTables.concat([{...action.payload}])}
        case 'HANDLE_ID_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, idDiningTable: action.payload}};
        case 'HANDLE_NUMBER_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, numberDiningTable: action.payload}};
        case 'HANDLE_CAPACITY_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, capacity: action.payload}};
        default: return {...state};
    }
}