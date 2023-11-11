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
           Discover the impact of our courses through the eyes of our learners. Join the chorus of satisfied learners and share your success story with us.
          </p>
        </header>
        <TestimonialList />
      </section>
    </div>
  );
};

export default Testimonials;
