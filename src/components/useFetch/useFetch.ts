import { useState } from "react";
import { IProduct } from "../../interfaces/interfaces";
import data from "./../../data/data.json";

const useProducts = () => {
  const [items, setItems] = useState<IProduct[]>(data);
  const [done, setDone] = useState(false);
  const [color, setColor] = useState(false);

  const onDeleteHandler = (id: number) => {
    setItems((items): any => {
      const idx = Array.from(items).findIndex((el: any) => el.id === id);
      const newArr = [...items.slice(0, idx), ...items.slice(idx + 1)];
      return {
        items: newArr,
      };
    });
  };
  let maxId = 100;

  const addItem = (text: string, setValue: any) => {
    const newItem = {
      list: text,
      id: maxId++,
      important: false,
      done: false,
    };

    setItems((items: any) => [...items, newItem]);
    setValue("");
  };
  //
  // const searchItem = (items: any, term: string): any => {
  //   if (term.length === 0) {
  //     return items;
  //   }
  //   return Array.from(items).filter((item: any) => {
  //     return item.list.toLowerCase().indexOf(term.toLowerCase()) > 1;
  //   });
  // };

  const onToogleDone = (id: number): void => {
    setItems((items): any => {
      const idx = items.findIndex((el: any) => el.id === id);

      const oldItem = items[idx];

      const newItem = { ...oldItem, done: !done };

      const newArr = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
      return {
        newArr,
      };
    });
    setDone(!done);
  };

  const onToogleImportant = (id: number): void => {
    if (id) {
      setColor(!color);
    }
  };

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
    items,
    onDeleteHandler,
    setItems,
    addItem,
    onToogleDone,
    onToogleImportant,
    color,
    done,
  };
};

export default useProducts;
