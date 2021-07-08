import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( category => {
        return(
          <button 
            key={category}
            name={category}
            className={selectedCategory === category ? "selected" : null}
            onClick={onCategoryChange}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
