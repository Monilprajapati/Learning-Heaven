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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <CategoryList />
      </section>
    </div>
  );
};

export default Categories;
