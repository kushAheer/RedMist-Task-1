import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
    name: "progress",
    initialState: {
        step : localStorage.getItem("step") ? parseInt(localStorage.getItem("step")) : 0,
    },
    reducers: {
        incrementStep: (state) => {
            state.step += 1;
            if(state.step > 5){
                state.step = 0;
            }
            localStorage.setItem("step", state.step);
        },
        decrementStep: (state) => {

            state.step -= 1;
            if(state.step < 0){
                state.step = 0;
            }
            localStorage.setItem("step", state.step);
        },
        resetStep: (state) => {
            state.step = 0;
            localStorage.setItem("step", state.step);
        }
    }
})

export const { incrementStep, decrementStep, resetStep } = progressSlice.actions;

export default progressSlice;