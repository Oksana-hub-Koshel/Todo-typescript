import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces/interfaces";

interface ITodos {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
}

const initialState: ITodos = {
  todos: [],
  loading: false,
  error: "",
};

export const fetchTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  return await response.json();
});

export const addNewTodo = createAsyncThunk<ITodo, string>(
  "todos/addNewTodo",
  async function (text, { rejectWithValue }) {
    const todo = {
      title: text,
      id: 11,
      completed: false,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      return rejectWithValue("Cant add task");
    }

    return (await response.json()) as ITodo;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // fetchTodosRequest(state) {
    //   state.loading = true;
    // },
    // fetchTodosSuccess(state, action: PayloadAction<ITodo[]>) {
    //   state.loading = false;
    //   state.todos = action.payload;
    // },
    // fetchTodosFailed(state, action: PayloadAction<string>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // addItem(state, action: PayloadAction<string>) {
    //   const newItem = {
    //     id: Math.random() * 10,
    //     title: action.payload,
    //     completed: false,
    //   };
    //   state.todos = state.todos.push(newItem);
    // },
    // deleteItem(state, action) {
    //   state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    // },
    //
    // completedItem(state, action: PayloadAction<number>) {
    //   state.todos = state.todos.find((elem) =>
    //     elem.id === action.payload
    //       ? elem.completed === true
    //       : elem.completed === false
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});
export default todoSlice.reducer;
