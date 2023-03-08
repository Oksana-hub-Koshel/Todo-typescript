import React, { useState } from "react";
import Done from "../../components/done/done";
import Search from "../../components/search/search";
import List from "../../components/list/list";
import AddItem from "../../components/add_item";
import useTodos from "../../components/useFetch/useTodos";

const Todo = () => {
  const [term, setTerm] = useState("");
  const { todos, filterItems, onFilterChange, filter, search } = useTodos();

  const visibleItems = filterItems(search(todos, term), filter);

  return (
    <div>
      <h1 className="flex justify-center font-bold mt-6 mb-6 font-sans text-4xl">
        Todo List
      </h1>
      <Done />
      <Search
        term={term}
        setTerm={setTerm}
        filter={filter}
        onFilterChange={onFilterChange}
      />
      <List list={visibleItems} />
      <AddItem />
    </div>
  );
};

export default Todo;
