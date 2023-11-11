import React from "react";
import "./CategoriesName.css"

const CategoriesName = () => {

  const categories = [
    {
      id: 'all',
      name: 'ALL'
    },
    {
      id: 'development',
      name: 'Development'
    },
    {
      id: 'marketing',
      name: 'Marketing'
    },
    {
      id: 'designing',
      name: 'Designing'
    },
    {
      id: 'photography',
      name: 'Photography'
    }
  ]
  return (
    <div className="categories_display">
      {categories.map((category) => (
        <div id={category.id} className="category">
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoriesName;
