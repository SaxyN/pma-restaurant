import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurant/restaurant.reducer';
import { supplyReducer } from './supply/supply.reducer';

export default combineReducers({
    restaurant: restaurantReducer,
    supply: supplyReducer,
})