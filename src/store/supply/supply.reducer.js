import * as types from './supply.actions';

const initialState = {
    supply_companies: [],

    // temp data holdage
    currentCompany: null,
    ingredients: [],
    currentManifest: [],
    modalOpen: false,

    // error stuff
    errorMessage: {
        message: "",
        showToggle: false,
    },
}

export const supplyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SUPPLY_DATA_SUCCESS:
            return {
                ...state,
                supply_companies: action.payload.companies,
                ingredients: action.payload.ingredients,
            }
        case types.LOAD_SUPPLY_DATA_FAILURE:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.payload,
                    showToggle: true,
                },
            }
        case types.SELECT_COMPANY:
            return {
                ...state,
                currentCompany: action.payload,
            }
            // return {

            // }
        default:
            return state;
    }
}

export default supplyReducer;