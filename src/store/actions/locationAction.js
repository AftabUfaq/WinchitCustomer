import {SET_LOCATION } from "../types";
export const SetLocation = (data) => {
    return {
        type:SET_LOCATION,
        payload:data
    }
}