import { SET_LOCATION } from "../types";
const INITIAL_STATE = {
    location:{
        "accuracy": 0,
        "altitude": 0,
        "altitudeAccuracy": 0,
        "heading": 0,
        "latitude": 0,
        "longitude": 0,
        "speed": 0
    }
};
    export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case SET_LOCATION:
                return {
                    ...state,
                    location:action.payload,
                };
            default:
                return state;
        }
    };