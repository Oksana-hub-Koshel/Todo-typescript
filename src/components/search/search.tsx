import React from "react";

const Search = ({ setTerm, term, filter, onFilterChange }: any) => {
  const searchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(() => e.target.value);
  };

  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

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
      {buttons.map((elem, i) => {
        const isActive = filter === elem.name;
        const clazz = isActive ? "btn-active" : "btn-no-active";
        return (
          <button
            key={i}
            className={clazz}
            onClick={() => onFilterChange(elem.name)}
          >
            {elem.label}
          </button>
        );
      })}
    </div>
  );
};

export default Search;
