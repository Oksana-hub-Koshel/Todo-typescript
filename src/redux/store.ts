import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import todoReducer from "./reducers/todoSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    todos: todoReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
