import { createSlice } from "@reduxjs/toolkit";
import { DashboardModel } from "./models/DashboardModel";
import { UserModel } from "./models/UserModel";

const initialStateUser: UserModel = {
    email: "",
    name: "",
    photoUrl: "",
    access_data: "",
    id: ''
}

const initialDashboardModel: DashboardModel = {
    isAuthenticate: false,
    toggleSideBar: false,
    user: initialStateUser
}

const local = JSON.parse(localStorage.getItem('megafacil') as string);
const initialState: DashboardModel = local !== null && local !== '' ? local : initialDashboardModel;

const dashboardSlice = createSlice({
    name: "root",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.user = {
                email: "",
                name: "",
                photoUrl: "",
                id: '',
                access_data: ''
            };
            state.isAuthenticate = false;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
        setToggleSideBar: (state) => {
            state.toggleSideBar = !state.toggleSideBar;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
        login: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.isAuthenticate = true;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
        setDataRegisterWithoutSave: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.isAuthenticate = false;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
    },
});

export const {
    setToggleSideBar,
    login,
    logout,
    setDataRegisterWithoutSave,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
