import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import List from "./components/list/list";
import AddItem from "./components/add_item";
import axios, { AxiosError } from "axios";
import { IProduct } from "./interfaces/interfaces";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const onDeleteHandler = (id: number) => {
    setProducts((state): any => {
      const idx = state.findIndex((el: any) => el.id === id);
      const newArr = [...state.slice(0, idx), ...state.slice(idx + 1)];
      return {
        state: newArr,
      };
    });
  };

  const addItem = (text: string) => {
    const newItem = {
      title: text,
      id: 20,
      price: 3,
      description: "hey",
      category: "hey",
      image: "hey",
      rating: {
        rate: 7,
        count: 8,
      },
    };
    setProducts((state) => [...state, newItem]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Search />
      {Array.from(products).map((elem) => {
        return (
          <List
            list={elem.title}
            id={elem.id}
            onDeleteHandler={onDeleteHandler}
          />
        );
      })}
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
