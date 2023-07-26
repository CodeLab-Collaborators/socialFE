import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    stepToggle: false,
    user: "" || null,
}

const globalState: Slice<initialState, {
    signUserGlobal: (state: any, { payload }: any) => void;
    logOut: (state: any) => void;
}, "authUser"> = createSlice({
    name: "authUser",
    initialState,
    reducers: {

        signUserGlobal: (state: any, { payload }: any) => {
            state.user = payload
        },
        logOut: (state: any,) => {
            state.user = null
        },
    }
});

export const { signUserGlobal, logOut } = globalState.actions

export default globalState.reducer