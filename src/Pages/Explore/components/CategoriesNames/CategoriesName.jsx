import React from "react";
import "./CategoriesName.css";

const CategoriesName = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    {
      id: "all",
      name: "ALL",
    },
    {
      id: "Development",
      name: "Development",
    },
    {
      id: "Graphic Design",
      name: "Graphic Design",
    },
    {
      id: "Marketing",
      name: "Marketing",
    },
    {
      id: "Photography",
      name: "Photography",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className="categories_display">
      {categories.map((category) => (
        <div
          key={category.id}
          id={category.id}
          className={`category ${
            activeCategory === category.id ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoriesName;
