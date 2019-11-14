const initialState = {
    listMenu:[],
    menuForm: {
        idMenu:"",
        menuName: "",
        price: "",
        availability: true,
        idMenuCategory: ""
    },
    menuImage: {}
};

export function menuReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_MENU_SUCCESS':
            return {...state, listMenu: action.payload};
        case 'EDIT_MENU_FORM':
            return {...state,  menuForm: action.payload};
        case 'HANDLE_MENU_NAME_FORM':
            return {...state, menuForm: {...state.menuForm, menuName: action.payload}};
        case 'HANDLE_MENU_PRICE_FORM':
            return {...state, menuForm: {...state.menuForm, price: action.payload}};
        case 'HANDLE_MENU_AVAILABILITY_FORM':
            return {...state, menuForm: {...state.menuForm, availability: action.payload}};
        case 'HANDLE_MENU_CATEGORY_FORM':
            return {...state, menuForm: {...state.menuForm, idMenuCategory:action.payload}};
        case 'HANDLE_MENU_IMAGE_FORM':
            return {...state, menuImage: action.payload};
        case 'RESET_MENU_FORM':
            return {...state, menuForm: {...state.menuForm, idMenu: "", menuName: "", price: "", availability: "", idMenuCategory: ""}, menuImage: {}};
        default: return {...state}
    }
}