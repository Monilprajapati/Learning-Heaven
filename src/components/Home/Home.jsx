import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {

  return (
    <div>
      <section className="home" id="home">
        <Navbar />
        <Banner />
      </section>
    </div>
  );
};

export default Home;
