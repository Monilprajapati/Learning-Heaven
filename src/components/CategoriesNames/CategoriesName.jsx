import React from "react";
import "./CategoriesName.css"

const CategoriesName = () => {
  return (
    <div className="categories_display">
      <div id="all" className="category">
        ALL
      </div>
      <div id="development" className="category">
        Development
      </div>
      <div id="marketing" className="category">
        Marketing
      </div>
      <div id="designing" className="category">
        Designing
      </div>
      <div id="photography" className="category">
        Photography
      </div>
    </div>
  );
};

export default CategoriesName;
