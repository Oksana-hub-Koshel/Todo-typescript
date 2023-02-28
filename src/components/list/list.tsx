import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TodosService from "../../services/todosService/todosService";
import { fetchTodos } from "../../redux/reducers/todoSlice";

const List = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      {todos.map((elem) => {
        return (
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
            key={elem.id}
          >
            <div className="list">
              <div className={elem.completed ? "list_items_col" : "list_items"}>
                <span>{elem.title}</span>
              </div>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
