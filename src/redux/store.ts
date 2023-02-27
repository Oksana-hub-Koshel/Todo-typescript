import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./reducers/todosSlice";


// const rootReducer = combineReducers({})
//
// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer
//     })
// }
//
// export type RootState=ReturnType<typeof rootReducer>
// export type AppStore=ReturnType<typeof setupStore>
// export type AppDispatch=AppStore['dispatch']


export const store = configureStore({
    reducer: {
        todos: todosSlice,

    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;