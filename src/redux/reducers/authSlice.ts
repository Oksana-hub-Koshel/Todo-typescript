import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../interfaces/interfaces";

const initialState: IAuth = {
  email: null,
  token: null,
  id: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IAuth>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      // localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
