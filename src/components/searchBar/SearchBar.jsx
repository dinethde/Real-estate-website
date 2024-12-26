import React, { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  // Switiching types (Changing only the type)
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="SearchBar">
      <div className="type">
        {/* Map function to iterate over types array and create 2 buttons  */}
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type == type ? "active" : " "}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="max Price"
        />

        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
