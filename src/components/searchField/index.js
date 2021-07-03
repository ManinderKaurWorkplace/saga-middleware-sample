import React from "react";

const SearchFieldComponent = ({ value, onChange }) => {
  return (
    <div className='search-container'>
      <input
        value={value}
        placeholder={"Search for employee name, salary or age...."}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchFieldComponent;
