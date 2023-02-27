import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodos} from "../../interfaces/interfaces";

interface todosState{
    todos: ITodos[],
    loading: boolean,
    error: string,
    count: number
}

const initialState:todosState={
    todos: [],
    loading:false,
    error:'',
    count:0
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count+=action.payload

        }
    }
})

export const {
    increment,
} = todosSlice.actions;

export default todosSlice.reducer;