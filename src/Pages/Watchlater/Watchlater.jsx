import React from "react";
import "./Watchlater.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Watchlater = () => {
  return (
    <div className="watchlater-page">
      <div className="watchlater">
        <Sidebar />
        <div className="watchlater-content">Watch later</div>
      </div>
    </div>
  );
};

export default Watchlater;
