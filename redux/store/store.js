import { configureStore } from "@reduxjs/toolkit";
import { counterStateSlice } from "../slice/counterSlice";

export default configureStore({
    reducer : {
        counter : counterStateSlice
    }
})
