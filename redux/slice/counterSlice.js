import {createSlice} from "@reduxjs/toolkit";

export const counterStateSlice = createSlice({
    name : "counter",
    initialState : {
        countingValue : 0
    },
    reducers : {
        increment : (state) => {
            state.countingValue = state.countingValue +1;
        },
        decrement : (state) => {
            state.countingValue = state.countingValue - 1;
        }
    }
})

export const {increment, decrement} = counterStateSlice.actions;
export default counterStateSlice.reducer;