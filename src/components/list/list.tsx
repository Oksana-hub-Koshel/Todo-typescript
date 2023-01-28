import { ITodo } from "../../interfaces/interfaces";

const List = ({
  list,
  onDeleteHandler,
  onToogleImportant,
  onToogleDone,
  color,
  done,
}: ITodo) => {
  console.log(list);

  return (
    <div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <div className="list">
          <div className={done ? "list_items_col" : "list_items"}>
            <span
              className={color ? "cl_bl" : "cl_sim"}
              onClick={() => onToogleDone(list.id)}
            >
              {list.list}
            </span>
          </div>
          <button onClick={() => onDeleteHandler(list.id)}>Delete</button>
          <button onClick={() => onToogleImportant(list.id)}>Important</button>
        </div>
      </div>
    </div>
  );
};

export default List;
