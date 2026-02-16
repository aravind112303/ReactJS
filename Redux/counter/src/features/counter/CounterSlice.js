import {createSlice} from "@reduxjs/toolkit"

const CounterSlice = createSlice({name:"Counter",
    initialState: {count : 0},
    reducers: {
        increment(state) {
            state.count +=1;
        },
        decrement(state) {
            state.count -=1;
        },
        addByAmount(state, action) {
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, addByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;