import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slices/studentSlice";

export const store = configureStore({
    reducer: {
        students: studentSlice
    }
})