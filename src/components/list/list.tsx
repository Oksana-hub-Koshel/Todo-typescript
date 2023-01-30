import { IProduct, ITodo } from "../../interfaces/interfaces";

const List = ({
  list,
  onDeleteHandler,
  onToogleImportant,
  onToogleDone,
}: ITodo) => {
  return (
    <div>
      {list.map((elem: IProduct) => {
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
              <div className={elem.done ? "list_items_col" : "list_items"}>
                <span
                  className={elem.important ? "cl_bl" : "cl_sim"}
                  onClick={() => onToogleDone(elem.id)}
                >
                  {elem.list}
                </span>
              </div>
              <button onClick={() => onDeleteHandler(elem.id)}>Delete</button>
              <button onClick={() => onToogleImportant(elem.id)}>
                Important
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
