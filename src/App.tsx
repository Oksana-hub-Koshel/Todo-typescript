import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import List from "./components/list/list";
import AddItem from "./components/add_item";
import useProducts from "./components/useFetch/useFetch";
import Done from "./components/done/done";
import search from "./components/search/search";
import { IProduct } from "./interfaces/interfaces";

function App() {
  const [term, setTerm] = useState("");
  const {
    items,
    addItem,
    onDeleteHandler,
    onToogleDone,
    onToogleImportant,
    done,
    color,
  } = useProducts();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Done />
      <Search setTerm={setTerm} term={term} />

      {items
        .filter((val: any) => {
          if (term === "") {
            return val;
          } else if (val.list.toLowerCase().includes(term.toLowerCase())) {
            return val;
          }
        })
        .map((elem, key) => {
          return (
            <List
              list={elem}
              onDeleteHandler={onDeleteHandler}
              onToogleImportant={onToogleImportant}
              onToogleDone={onToogleDone}
              color={color}
              done={done}
            />
          );
        })}

      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
