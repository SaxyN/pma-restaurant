import restaurantJson from '../../helpers/restaurantJson.json';

export const SHOW_UI = "SHOW_UI";
export const HIDE_UI = "HIDE_UI";

export const LOAD_RESTAURANT_DATA_SUCCESS = "LOAD_RESTAURANT_DATA_SUCCESS";
export const LOAD_RESTAURANT_DATA_FAILURE = "LOAD_RESTAURANT_DATA_FAILURE";

export const UPDATE_CART = "UPDATE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const CLEAR_RESTAURANT_DATA = "CLEAR_RESTAURANT_DATA";

export const loadRestaurantData = (data) => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            try {
                dispatch({type: LOAD_RESTAURANT_DATA_SUCCESS, payload: restaurantJson});
            } catch (e) {
                dispatch({type: LOAD_RESTAURANT_DATA_FAILURE});
            }
        } else {
            try {
                dispatch({type: LOAD_RESTAURANT_DATA_SUCCESS, payload: data});
            } catch (e) {
                dispatch({type: LOAD_RESTAURANT_DATA_FAILURE});
            }
        }
    }
}

export const softLoadData = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_RESTAURANT_DATA_SUCCESS, payload: data
        })
    }
}

export const showUI = (data) => {
    return (dispatch) => {
        if (process.env.NODE_ENV == "development") {
            dispatch(loadUI())
        }
    }
}

export const loadUI = () => {
    return (dispatch) => {
        dispatch({
            type: SHOW_UI
        });
    }
}

export const hideUI = () => {
    return (dispatch) => {
        dispatch({
            type: HIDE_UI
        });
    }
}

export const updateCart = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_CART, payload: data,
        })
    }
}

export const addToCart = (items, item, cart) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        if (clonedItems.get(item.name).quantity < 0) {
            clonedItems.get(item.name).quantity = 0;
        } else {
            clonedCart.get(item.name).quantity++;
        }

        const data = {
            cart: clonedCart,
            items: clonedItems,
        };

        dispatch({
            type: ADD_TO_CART,
            payload: data,
        })
    }
}

export const removeFromCart = (items, item, cart) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        clonedCart.get(item.name).quantity -= 1;
        if (clonedCart.get(item.name).quantity < 0) {
            clonedCart.get(item.name).quantity = 0;
        } else {
            clonedItems.get(item.name).quantity++;
        }

        const data = {
            cart: clonedCart,
            items: clonedItems,
        };

        dispatch({
            type: REMOVE_FROM_CART,
            payload: data,
        });
    };
};

export const clearRestaurantData = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_RESTAURANT_DATA
        });
    }
}