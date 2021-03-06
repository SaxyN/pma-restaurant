import * as types from './restaurant.actions';

const initialState = {
    showUI: false,
    food_items: [],
    menu_data: null,
    user_data: null,
    cart: {
        items: [],
        totalCost: 0,
    },
    orders: [],
    tempPrice: "",
    selectedItem: "",
    // cart: [{label: "Carne Asada Taco", name: "carne_asada_taco", count: 1, cost: 300},{label: "Spicy Taco", name: "spicy_taco", count: 2, cost: 600}],

    errorMessage: {
        message: "",
        showToggle: false,
    },
}

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.SHOW_BURGERSHOT:
        //     return {
        //         ...state,
        //         showBurgerShot: true,
        //     }
        // case types.HIDE_BURGERSHOT:
        //     return {
        //         ...state,
        //         showBurgerShot: false,
        //     }
        case types.SHOW_UI:
            return {
                ...state,
                showUI: true
            }
        case types.HIDE_UI:
            return {
                ...state,
                showUI: false
            }
        case types.LOAD_RESTAURANT_DATA_SUCCESS:
            return {
                ...state,
                food_items: action.payload.food_items,
                menu_data: action.payload.menu_data,
                user_data: action.payload.user_data,
                orders: action.payload.orders
            }
        case types.LOAD_RESTAURANT_DATA_FAILURE:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.payload,
                    showToggle: true,
                },
            }
        case types.UPDATE_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: action.payload.items,
                    totalCost: action.payload.totalCost,
                },
            }
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
            }
        case types.SET_TEMP_PRICE:
            return {
                ...state,
                tempPrice: action.payload,
            }
        case types.SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload,
            }
        case types.CLEAR_RESTAURANT_DATA:
            return {
                ...state,
                food_items: [],
                menu_data: null
            }
        case types.CLEAR_CART:
            return {
                ...state,
                cart: {
                    items: [],
                    totalCost: 0,
                }
            }
        default:
            return state;
    }
}
export default restaurantReducer;