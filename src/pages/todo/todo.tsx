import React, {useState} from 'react';
import useProducts from "../../components/useFetch/useFetch";
import Done from "../../components/done/done";
import Search from "../../components/search/search";
import List from "../../components/list/list";
import AddItem from "../../components/add_item";

const Todo = () => {
    const [term, setTerm] = useState("");

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
        <div>
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


        </div>
    );
};

export default Todo;