import { AppDispatch } from "../store";
import axios from "axios";

import { IUsers } from "../../interfaces/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async(dispatch: AppDispatch)=> {
//     try {
//         dispatch(fetchUserRequest())
//         const res = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(fetchUserSuccess(res.data))
//     } catch (e) {
//         dispatch(fetchUserError(e.message))
//     }
// }

// export const fetchUsers=createAsyncThunk(
//     "users/fetchUsers",
//     async (_,thunkAPI,)=>{
//         try {
//             const res = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
//             return res.data;
//         } catch (e){
//             return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
//         }
//
//     }
// )
