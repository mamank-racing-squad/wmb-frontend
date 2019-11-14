const initialState = {
    menuCategories:[],
    menuCategoryForm:{
        idMenuCategory: "",
        categoryName: ""
    }
};

export function menuCategoryReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_CATEGORY_SUCCESS' :
            return {...state, menuCategories: action.payload};
        case 'EDIT_MENU_CATEGORY_FORM':
            return {...state, menuCategoryForm: action.payload};
        case 'HANDLE_CATEGORY_NAME_FORM':
            return {...state, menuCategoryForm: {...state.menuCategoryForm, categoryName: action.payload}};
        case 'RESET_MENU_CATEGORY_FORM':
            return {...state, menuCategoryForm: {...state.diningTableForm, idMenuCategory: "", categoryName: ""}};
        default: return {...state}
    }
}
