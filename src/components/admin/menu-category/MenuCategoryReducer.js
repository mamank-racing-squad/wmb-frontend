const initialState = {
    menuCategory:[],
    menuCategoryInput:{
        categoryName:""
    }
};

export function menuCategoryReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_CATEGORY_SUCCESS' :
            return {...state, menuCategory: action.payload};
        case 'HANDLE_INPUT_CATEGORY_NAME':
            return {...state, menuCategoryInput: {categoryName:action.categoryName}}
        default:
            return {...state}
    }
}
