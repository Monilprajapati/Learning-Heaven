import React from "react";
import "./Likedvideos.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Likedvideos = () => {
  return (
    <div className="likedvideo-page">
     
        <div className="likedvideos">
            <Sidebar/>
            <div className="likedvideos-content">
                Liked Video
            </div>
        </div>
    </div>
  );
};

export default Likedvideos;
