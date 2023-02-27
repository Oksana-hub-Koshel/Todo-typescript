import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import List from "./components/list/list";
import AddItem from "./components/add_item";
import useProducts from "./components/useFetch/useFetch";
import Done from "./components/done/done";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import todosSlice from "./redux/reducers/todosSlice";
import {increment} from "./redux/reducers/todosSlice"

function App() {
  const [term, setTerm] = useState("");

  const {count}=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()

    const {
    items,
    addItem,
    onDeleteHandler,
    onToogleDone,
    onToogleImportant,
    filterItems,
    onFilterChange,
    filter,
    search,
  } = useProducts();

  const visibleItems = filterItems(search(items, term), filter);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Done />
      <Search
        setTerm={setTerm}
        term={term}
        filter={filter}
        onFilterChange={onFilterChange}
      />

      <List
        list={visibleItems}
        onDeleteHandler={onDeleteHandler}
        onToogleImportant={onToogleImportant}
        onToogleDone={onToogleDone}
      />

      <AddItem addItem={addItem} />

        {count}
        <button onClick={()=> dispatch(increment(10))}>Inc</button>

    </div>
  );
}

export default App;
