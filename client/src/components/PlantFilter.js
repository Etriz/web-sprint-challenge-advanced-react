import React from "react";

const PlantFilter = ({ handleChange }) => {
  return (
    <label htmlFor="filter">
      {`Filter By `}
      <select id="filter" name="filter" placeholder="Filter By" onChange={handleChange}>
        <option value="">All Plants</option>
        <optgroup>
          <option value="direct">Direct Sun</option>
          <option value="indirect">Indirect Sun</option>
          <option value="low">Low Sun</option>
        </optgroup>
      </select>
    </label>
  );
};

export default PlantFilter;
