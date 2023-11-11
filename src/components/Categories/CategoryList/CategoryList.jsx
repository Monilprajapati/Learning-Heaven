import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";

const CategoryList = () => {
  const categories = [
    {
      icon: "fa-solid fa-code",
      title: "Development",
      description: "Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Marketing",
      description:
        "Marketing refers to activities a company undertakes to promote the buying or selling of a product or service.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Designing",
      description:
        "Graphic design is a craft where professionals create visual content to communicate messages.",
    },
    {
      icon: "fa-solid fa-camera",
      title: "Photography",
      description:
        "The word Photography literally means 'drawing with light', which derives from the Greek photo, meaning light and graph, meaning to draw.",
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
