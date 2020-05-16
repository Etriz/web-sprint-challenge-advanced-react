import React from "react";

const PlantFilter = ({ handleChange }) => {
  const filterStyle = {
    textAlign: "center",
  };

  return (
    <label htmlFor="filter" style={filterStyle}>
      {`Filter By `}
      <select id="filter" name="filter" placeholder="Filter By" onChange={handleChange}>
        <option value="">All Plants</option>
        <optgroup>
          <option value="direct">Direct Sun</option>
          <option value="indirect">Indirect Sun</option>
          <option value="low">Low Sun</option>
        </optgroup>
        <optgroup>
          <option value="2">Water 2X/Month</option>
          <option value="4">Water 4X/Month</option>
          <option value="6">Water 6X/Month</option>
        </optgroup>
      </select>
    </label>
  );
};

export default PlantFilter;
