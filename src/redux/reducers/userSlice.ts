import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/interfaces";

const users = [
  { id: 1, name: "Alex Jame", email: "slex.gmail.com" },
  { id: 2, name: "Max Failer", email: "max.gmail.com" },
  { id: 3, name: "Marry James", email: "marry.gmail.com" },
];

interface usersState {
  users: IUser[];
  loading: boolean;
  error: string;
}

const initialState: usersState = {
  users: users,
  loading: false,
  error: "",
};

type User = {
  id: number;
  name: string;
  email: string;
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users.filter((user) => user.id !== action.payload);
    },
    editUser(state, action: PayloadAction<User>) {
      const { id, name, email } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.id = id;
      }
    },
  },

  //
  // extraReducers:{
  //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>)=>{
  //         state.loading = false,
  //             state.users = action.payload,
  //             state.error = ''
  //     },
  //     [fetchUsers.pending.type]: (state)=>{
  //         state.loading = true
  //     },
  //     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>)=>{
  //         state.loading = false,
  //             state.error = action.payload
  //     }
  // }
});

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
