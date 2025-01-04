// import Card from "../../components/card/card";
// import Filter from "../../components/filter/filter";
// import { listData } from "../../lib/dummyData";
// import Map from "../../components/map/map";
// import "./listPage.scss";

// function ListPage() {
//   const data = listData;

//   return (
//     <div className="listPage">
//       <div className="listContainer">
//         <div className="wrapper">
//           <Filter />
//           {listData.map((item) => (
//             <Card key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//       <div className="mapContainer">
//         <Map items={data} />
//       </div>
//     </div>
//   );
// }

// export default ListPage;

// // I think we have  a small problem. Because displaying items are in different file called list page. So I want to  add displaying logic and code into displaying file. Above is the code list page has now

// listPage.jsx

import { useState } from "react";
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import { listData } from "../../lib/dummyData";
import Map from "../../components/map/map";
import "./listPage.scss";

function ListPage() {
  // 1. Keep the data in local variable or in state (if you plan to modify it).
  const data = listData;

  // 2. State for storing user filter inputs
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    property: "",
    minPrice: "",
    maxPrice: "",
    bedroom: "",
  });

  // 3. Handler for updating filters from child component (Filter)
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. Filter logic
  const filteredList = data.filter((item) => {
    // If user didn't pick a filter, skip that condition
    const matchesType = !filters.type || item.type === filters.type;
    const matchesProperty =
      !filters.property || item.property === filters.property;
    const matchesMinPrice =
      !filters.minPrice || item.price >= Number(filters.minPrice);
    const matchesMaxPrice =
      !filters.maxPrice || item.price <= Number(filters.maxPrice);
    const matchesBedroom =
      !filters.bedroom || item.bedroom >= Number(filters.bedroom);

    // For city, partial match
    const matchesCity =
      !filters.city ||
      item.address?.toLowerCase().includes(filters.city.toLowerCase());

    return (
      matchesType &&
      matchesProperty &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedroom &&
      matchesCity
    );
  });

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          {/* 5. Pass callback & current filter values to Filter */}
          <Filter filters={filters} onFilterChange={handleFilterChange} />

          {/* 6. Render filtered items with Card */}
          {filteredList.length > 0 ? (
            filteredList.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No matching results found.</p>
          )}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={filteredList} />
      </div>
    </div>
  );
}

export default ListPage;
