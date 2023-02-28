import { useState } from "react";

import data from "./../../data/data.json";

const useProducts = () => {
  // const [items, setItems] = useState<IProduct[]>(data);
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
  // const searchItem = (items: any, term: string): any => {
  //   if (term.length === 0) {
  //     return items;
  //   }
  //   return Array.from(items).filter((item: any) => {
  //     return item.list.toLowerCase().indexOf(term.toLowerCase()) > 1;
  //   });
  // };

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

  const filterItems = (items: any, filter: string) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item: any) => !item.done);
      case "done":
        return items.filter((item: any) => item.done);
      default:
        return items;
    }
  };

  // const search = (items, term: string) => {
  //   return items.filter((val: any) => {
  //     if (term === "") {
  //       return val;
  //     } else if (val.list.toLowerCase().includes(term.toLowerCase())) {
  //       return val;
  //     }
  //   });
  // };
  // const onFilterChange = (filter: string) => {
  //   setFilter(filter);
  // };

  // async function fetchProducts() {
  //   try {
  //     setError("");
  //     setLoading(true);
  //     const response = await axios.get<IProduct[]>(
  //       "https://fakestoreapi.com/products?limit=5"
  //     );
  //     setItems(response.data);
  //     setLoading(false);
  //   } catch (e: unknown) {
  //     const error = e as AxiosError;
  //     setLoading(false);
  //     setError(error.message);
  //   }
  // }
  //
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return {
    filterItems,
    filter,
    // onFilterChange,
    // search,
  };
};

export default useProducts;
