import { combineReducers } from 'redux'

function dealSelectedItem(state = [], action) {
    
    switch (action.type) {
        case 'ADD_SELECTED_ITEM':
            {
                return [action.payload, ...state]
            }
        case 'DEL_SELECTED_ITEM':
            {
                return state.filter(selectedItem => selectedItem.name !== action.payload.name)
            }
        case 'UPDATE_QUANTITY':
            {
                return state.map((item) => {
                    if(action.payload.name == item.name) {
                        return Object.assign({}, item, {quantity: action.payload.quantity})
                    }
                    return item
                })
            }
            case 'CLEAR_SELECTED_ITEMS':
            {
                return []
            }
        default:
            return state
    }
}

function dealFoods(state = [], action) {
    switch (action.type) {
        case 'ADD_FOODS':
            {
                return action.payload
            }
        case 'UPDATE_FOOD':
            {
                return action.payload
            }
        case 'UPDATE_SELECTED_FOOD':
            {
                state.map((item) => {
                    if(action.payload.name == item.name)
                    item.isSelected = action.payload.isSelected

                    return Object.assign(state.filter(foods => foods.name !== action.payload.name), item)
                })
            }
        case 'SET_DEFAULT_FOODS':
            {
                return state.map((item) => {
                    item.isSelected = false
                    return item
                })
            }
        default:
            return state
    }
}

function dealDrinks(state = [], action) {
    switch (action.type) {
        case 'ADD_DRINKS':
            {
                return action.payload
            }
        case 'UPDATE_DRINK':
        {
            return action.payload
        }
        case 'UPDATE_SELECTED_DRINK':
            {
                state.map((item) => {
                    if(action.payload.name == item.name)
                    item.isSelected = action.payload.isSelected

                    return Object.assign(state.filter(drinks => drinks.name !== action.payload.name), item)
                })
            }
        case 'SET_DEFAULT_DRINKS':
            {
                return state.map((item) => {
                    item.isSelected = false
                    return item
                })
            }
        default:
            return state
    }
}

const itemApp = combineReducers({
    selectedItem: dealSelectedItem,
    foods: dealFoods,
    drinks: dealDrinks
})

export default itemApp