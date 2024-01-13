import React from "react";

const Categories = ({ categories, menuFilter, activeCategory }) => {
  return (
    <div className="mb-4">
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        {categories.map((category, index) => (
          <button
            type="button"
            key={index}
            className={`btn ${
              activeCategory === category ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => menuFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
