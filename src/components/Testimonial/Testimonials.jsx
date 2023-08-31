import React from "react";
import TestimonialList from "./TestimonialList/TestimonialList";
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div>
      <section class="testimonials" id="testimonials">
        <header class="section-header">
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <TestimonialList />
      </section>
    </div>
  );
};

export default Testimonials;
