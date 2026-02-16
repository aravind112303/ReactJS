import {createSlice} from '@reduxjs/toolkit'
import fetchUsers from "../usersthunk"

const usersSlice = createSlice({
    name:"users",
    initialState : {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending  , (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchUsers.fulfilled , (state,action) => {
            state.loading = false,
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected , (state, action) => {
            state.loading = false,
            state.error = action.error.message;
        })
    }
})

export default usersSlice.reducer