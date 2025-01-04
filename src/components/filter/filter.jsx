import "./filter.scss";

// function Filter() {
//   return (
//     <div className="filter">
//       <h1>
//         Search results for <b>London</b>
//       </h1>
//       <div className="top">
//         <div className="item">
//           <label htmlFor="city">Location</label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             placeholder="City Location"
//           />
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="item">
//           {/* Filter option 1 - Type */}
//           <label htmlFor="type">Type</label>
//           <select name="type" id="type">
//             <option value="">any</option>
//             <option value="buy">Buy</option>
//             <option value="rent">Rent</option>
//           </select>
//         </div>
//         <div className="item">
//           {/* Filter option 2 - By Property */}
//           <label htmlFor="property">Property</label>
//           <select name="property" id="property">
//             <option value="">any</option>
//             <option value="apartment">Apartment</option>
//             <option value="house">House</option>
//             <option value="condo">Condo</option>
//             <option value="land">Land</option>
//           </select>
//         </div>
//         <div className="item">
//           {/* Filter option 3 - By Min Price */}
//           <label htmlFor="minPrice">Min Price</label>
//           <input
//             type="number"
//             id="minPrice"
//             name="minPrice"
//             placeholder="any"
//           />
//         </div>
//         <div className="item">
//           {/* Filter option 4 - By Max Price */}
//           <label htmlFor="maxPrice">Max Price</label>
//           <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
//         </div>
//         <div className="item">
//           {/* Filter option 5 - By Bedrooms */}
//           <label htmlFor="bedroom">Bedroom</label>
//           <input type="text" id="bedroom" name="bedroom" placeholder="any" />
//         </div>
//         <button>
//           <img src="/search.png" alt="" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Filter;

// filter.jsx

import React from "react";
import "./filter.scss";

function Filter({ filters, onFilterChange }) {
  // Instead of local state, we use props to set & read the values

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Call the callback passed from parent
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{filters.city ? filters.city : "any location"}</b>
      </h1>

      {/* Top row for City/Location */}
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            value={filters.city}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Bottom row for other filters */}
      <div className="bottom">
        {/* Filter: Type (buy/rent) */}
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={filters.type}
            onChange={handleChange}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Filter: Property (apartment, house, condo) */}
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            value={filters.property}
            onChange={handleChange}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* Filter: Min Price */}
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </div>

        {/* Filter: Max Price */}
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </div>

        {/* Filter: Min Bedrooms */}
        <div className="item">
          <label htmlFor="bedroom">Bedrooms</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            value={filters.bedroom}
            onChange={handleChange}
          />
        </div>

        {/* Button (Optional) - If you want an explicit "Search" */}
        {/* 
        <button type="button" onClick={someSearchFunction}>
          <img src="/search.png" alt="search icon" />
        </button> 
        */}
      </div>
    </div>
  );
}

export default Filter;
