import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";

const CategoryList = () => {
  const categories = [
    {
      icon: "fa-solid fa-code",
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-camera",
      title: "Photography",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="categories-contents">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
