import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUsers} from "../../interfaces/interfaces";



interface usersState{
    users: IUsers[],
    loading: boolean,
    error: string,

}

const initialState:usersState={
    users: [],
    loading:false,
    error:'',

}



const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUserRequest(state) {
            state.loading = true
        },
        fetchUserSuccess(state, action: PayloadAction<IUsers[]>) {
            state.loading = false
                state.users = action.payload
                state.error = ''

        },
        fetchUserError(state, action: PayloadAction<string>) {
            state.loading = false
                state.error = action.payload
        }
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
})

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserError

} = userSlice.actions;

export default userSlice.reducer;