const initialState = {
    listMenu:[],
    menuInput: {
        idMenu:"",
        menuName: "",
        price: "",
        availability: "",
        idMenuCategoryTransient: ""
    },
    image:{},
    menuCategory: []
};

export function menuReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_SUCCESS':
            return {...state, listMenu: action.payload}
        case 'FETCH_MENU_CATEGORY_SUCCESS_IN_MENU':
            return {...state, menuCategory: action.payload};
        case 'HANDLE_MENU_NAME':
            return {...state, menuInput: {...state.menuInput, menuName: action.menuName}};
        case 'HANDLE_MENU_PRICE':
            return {...state, menuInput: {...state.menuInput, price: action.price}};
        case 'HANDLE_MENU_AVAILABILITY':
            return {...state, menuInput: {...state.menuInput, availability: action.availability}};
        case 'HANDLE_MENU_CATEGORY':
            return {...state, menuInput: {...state.menuInput, idMenuCategoryTransient:action.category}};
        case 'HANDLE_MENU_IMAGE':
            return {...state, image: action.image};
        case 'EDIT_DATA_MENU':
            return {...state, menuInput: {...action.menuInput}};
        default:
            return {...state}
    }

}