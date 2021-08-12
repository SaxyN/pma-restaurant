import restaurantJson from '../../helpers/restaurantJson.json';

export const LOAD_SUPPLY_DATA_SUCCESS = "LOAD_SUPPLY_DATA_SUCCESS";
export const LOAD_SUPPLY_DATA_FAILURE = "LOAD_SUPPLY_DATA_FAILURE";

export const SHOW_COMPANY = "SHOW_COMPANY";
export const SELECT_COMPANY = "SELECT_COMPANY";

export const loadSupplyData = () => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            try {
                dispatch({type: LOAD_SUPPLY_DATA_SUCCESS, payload: restaurantJson});
            } catch (e) {
                dispatch({type: LOAD_SUPPLY_DATA_FAILURE});
            }
        } else {
            try {
                dispatch({type: LOAD_SUPPLY_DATA_SUCCESS, payload: data});
            } catch (e) {
                dispatch({type: LOAD_SUPPLY_DATA_FAILURE});
            }
        }
    }
}

export const showCompany = (data) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_COMPANY, payload: data,
        })   
    }
}

export const selectCompany = (data) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_COMPANY, payload: data,
        })   
    }
}