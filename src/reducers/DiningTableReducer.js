
const initialState = {
    diningTables: [],
    diningTableForm : {
        idDiningTable: "",
        numberDiningTable: "",
        capacity: 1
    }
};

export function diningTableReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_DINING_TABLE_SUCCESS':
            return {...state, diningTables: action.payload};
        case 'EDIT_DINING_TABLE_FORM':
            return {...state, diningTableForm: action.payload};
        case 'HANDLE_NUMBER_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, numberDiningTable: action.payload}};
        case 'HANDLE_CAPACITY_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, capacity: action.payload}};
        case 'RESET_DINING_TABLE_FORM':
            return {...state, diningTableForm: {...state.diningTableForm, idDiningTable: "", numberDiningTable: "", capacity: 1}};
        default: return {...state};
    }
}