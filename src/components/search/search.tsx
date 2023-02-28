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
          marginTop:20
      }}
    >
      <input
        type="text"
        placeholder="type to search"
        value={term}
        onChange={searchInput}
        style={{border:"solid grey", marginRight:10, padding:5}}
      />
        <div style={{display:"flex", gap:5}}>
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
    </div>
  );
};

export default Search;
