const initialState = {
    menuCategory:[],
    menuCategoryInput:{
        idMenuCategory:"",
        categoryName:""
    }
};

export function menuCategoryReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_CATEGORY_SUCCESS' :
            return {...state, menuCategory: action.payload};
        case 'HANDLE_INPUT_CATEGORY_ID':
            return {...state, menuCategoryInput: {...state.menuCategoryInput, idMenuCategory:action.idMenuCategory}};
        case 'HANDLE_INPUT_CATEGORY_NAME':
            return {...state, menuCategoryInput: {...state.menuCategoryInput, categoryName:action.categoryName}};
        case 'EDIT_DATA':
            return {...state, menuCategoryInput: {...action.menuCategoryInput}};
        case 'RELOAD':
            return {...state};
        default:
            return {...state}
    }
}
