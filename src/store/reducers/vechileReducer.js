import {SELECTED_VECHILE , GET_VECHILES} from '../types';

const INITIAL_STATE = {
  vechiles:[],
  selected_vechile:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_VECHILES:
            return {
                ...state,
                vechiles:action.payload,
            }
        case SELECTED_VECHILE:
            return {
                ...state,
                selected_vechile: action.payload
            };
        default:
            return state;
    }
};
