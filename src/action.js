export const onItemSelected = (payload) => (
    { type: 'ADD_SELECTED_ITEM', payload }
)

export const onItemUnselected = (payload) => (
    { type: 'DEL_SELECTED_ITEM', payload }
)

export const updateSelectedItemQuantity = (payload) => (
    { type: 'UPDATE_QUANTITY', payload }
)

export const clearSelectedItems = () => (
    { type: 'CLEAR_SELECTED_ITEMS' ,  }
)

export const updateFood = (payload) => (
    { type: 'UPDATE_FOOD', payload }
)

export const updateIsSelectedForFood = (payload) => (
    { type: 'UPDATE_SELECTED_FOOD', payload }
)

export const setDefaultFoods = () => (
    { type: 'SET_DEFAULT_FOODS',  }
)

export const updateDrink = (payload) => (
    { type: 'UPDATE_DRINK', payload }
)

export const updateIsSelectedForDrink = (payload) => (
    { type: 'UPDATE_SELECTED_DRINK', payload }
)

export const addFoods = (payload) => (
    {type: 'ADD_FOODS', payload}
)

export const addDrinks = (payload) => (
    {type: 'ADD_DRINKS', payload}
)

export const setDefaultDrinks = () => (
    { type: 'SET_DEFAULT_DRINKS',  }
)