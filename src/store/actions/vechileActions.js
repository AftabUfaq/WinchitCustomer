import { SELECTED_VECHILE, GET_VECHILES } from "../types";

export const GetVechiles = (data) => {
    return {
        type:GET_VECHILES,
        payload:data
    }
}

export const SelectVechiles = (data) => {
    return {
        type:SELECTED_VECHILE,
        payload:data
    }
}