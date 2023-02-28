import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"
import todoReducer from "./reducers/todoSlice"




export const store = configureStore({
    reducer: {
        users: userReducer,
        todos: todoReducer

    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;