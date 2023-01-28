import React from "react";

const Search = ({ setTerm, term }: any) => {
  const searchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(() => e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="type to search"
        value={term}
        onChange={searchInput}
      />
      <button>All</button>
      <button>Active</button>
      <button>Done</button>
    </div>
  );
};

export default Search;
