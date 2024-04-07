'use client'

const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    userAPIData: [],
    users: (typeof window !== 'undefined') && JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload
            }

            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            (typeof window !== 'undefined') ? localStorage.setItem("users", userData) : console.log(abc);
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
            let userData = JSON.stringify(data);
            (typeof window !== 'undefined') ? localStorage?.setItem("users", userData) : console.log(abc);

        },
        updateUser: (state, action) => {
            const ind = state.users.findIndex((item) => item.id === action.payload.update)
            if (ind !== -1) {
                state.users[ind].name = action.payload.updatedName;
              }
            let userData = JSON.stringify(state.users);
            (typeof window !== 'undefined') ? localStorage?.setItem("users", userData) : console.log(abc);

        }
    },
});

export const { addUser, removeUser, updateUser } = Slice.actions;
export default Slice.reducer;