import { createSlice } from "@reduxjs/toolkit";

interface DashboardModel {
    toggleSideBar: boolean;
    isAuthenticate: boolean;
    user: UserModel;
}

interface UserModel {
    email: string;
    photoUrl?: string;
    name?: string;
    access_data?: string;
}

const initialStateUser: UserModel = {
    email: "",
    name: "",
    photoUrl: "",
    access_data: "",
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
                photoUrl: ""
            };
            state.isAuthenticate = false;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
        setToggleSideBar: (state) => {
            state.toggleSideBar = !state.toggleSideBar;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticate = true;
            localStorage.setItem('megafacil', JSON.stringify(state));
        },
    },
});

export const {
    setToggleSideBar,
    login,
    logout,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
