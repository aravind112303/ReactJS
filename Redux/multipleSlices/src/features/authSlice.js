import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : "auth",
    initialState : {isLoggedIn : true},
    reducers : {
        Login(state) {
            state.isLoggedIn = true;
        },
        Logout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const {Login, Logout} = authSlice.actions;
export default authSlice.reducer