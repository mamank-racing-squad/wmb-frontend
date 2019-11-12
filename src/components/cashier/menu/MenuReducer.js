const initialState = {
    menu:[],

};
export function menuCategoryReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_SUCCESS' :
            return {...state, menuCategory: action.payload};
        case 'RELOAD':
            return {...state};
        default:
            return {...state}
    }
}