import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    isRole:0,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers:{
        LOADING: (state, action)=>{
            state.isLoading = action.payload
        },
        SET_USER:(state, action) =>{
            console.log(action.payload)
            state.isAuthenticated = true,
            state.user = action.payload
        },
        SET_ROLE: (state, action) =>{
            state.isRole = action.payload
        },
        IS_AUTHENTICATED: (state, action) => {
            console.log(action.payload)
            state.isAuthenticated = action.payload
        },
        LOGOUT: (state) => {
            console.log(action.payload)
            state.isAuthenticated = false,
            state.user = {}
        }
    }
})


export const {LOADING, SET_USER, SET_ROLE, IS_AUTHENTICATED, LOGOUT} = AuthSlice.actions
export default AuthSlice.reducer