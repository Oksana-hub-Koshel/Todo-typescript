import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ITodo } from "../../interfaces/interfaces";

const useTodos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const [filter, setFilter] = useState<string>("all");
  //
  // const onDeleteHandler = (id: number) => {
  //   // setItems((items): any => {
  //   //   const idx = Array.from(items).findIndex((el: any) => el.id === id);
  //   //   const newArr = [...items.slice(0, idx), ...items.slice(idx + 1)];
  //   //   return {
  //   //     items: newArr,
  //   //   };
  //   // });
  //   setItems((prev) => prev.filter((items) => items.id !== id));
  // };
  // let maxId = 100;

  // const addItem = (text: string, setValue: any) => {
  //   const newItem = {
  //     list: text,
  //     id: maxId++,
  //     important: false,
  //     done: false,
  //   };
  //
  //   setItems((items: any) => [...items, newItem]);
  //   setValue("");
  // };
  //
  const searchItem = (todos: ITodo[], term: string): any => {
    if (term.length === 0) {
      return todos;
    }
    return Array.from(todos).filter((item: any) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > 1;
    });
  };

  // const onToogleDone = (id: number): void => {
  //   setItems([
  //     ...items.map((task) =>
  //       task.id === id ? { ...task, done: !task.done } : { ...task }
  //     ),
  //   ]);
  // };
  //
  // const onToogleImportant = (id: number): void => {
  //   setItems([
  //     ...items.map((task) =>
  //       task.id === id ? { ...task, important: !task.important } : { ...task }
  //     ),
  //   ]);
  // };

  const filterItems = (todos: ITodo[], filter: string) => {
    switch (filter) {
      case "all":
        return todos;
      case "done":
        return todos.filter((item: any) => item.completed);
      default:
        return todos;
    }
  };

  const search = (todos: ITodo[], term: string) => {
    return todos.filter((val) => {
      if (term === "") {
        return val;
      } else if (val.title.toLowerCase().includes(term.toLowerCase())) {
        return val;
      }
    });
  };
  const onFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return {
    filterItems,
    filter,
    onFilterChange,
    search,
    todos,
  };
};

export default useTodos;
