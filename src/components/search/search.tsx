import React from "react";

const Search = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input type="text" placeholder="type to search" />
      <button>All</button>
      <button>Active</button>
      <button>Done</button>
    </div>
  );
};

export default Search;
