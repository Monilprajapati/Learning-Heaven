import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import './Categories.css';

const Categories = () => {
  return (
    <div>
      <section class="categories" id="categories">
        <header class="section-header">
          <h1>Brouse Courses By Categories</h1>
          <p>
          Welcome to our Courses Categories section, where learning meets passion! Explore a diverse range of skill-building opportunities designed to empower you in the digital age.
          </p>
        </header>

        <CategoryList />
      </section>
    </div>
  );
};

export default Categories;
