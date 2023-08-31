import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {

  const navigate = useNavigate();

  const navigateToexplore = (category) => {
    navigate("/explore")
  }
  return (
    <div className="category-item" onClick={() => navigateToexplore()}>
      <div className="category-icon">
        <i className={category.icon}></i>
      </div>
      <div className="category-desc">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
