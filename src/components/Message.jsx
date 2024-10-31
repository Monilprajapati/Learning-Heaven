import React from "react";
import "./Message.css";
import { FaLaptopCode } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";

const Message = () => {
  return (
    <div className="mobile-message">
      <div className="mobile-logo">
        <img src={require("../images/home/logo.png")} alt="Logo" />
      </div>
      <div className="message-content">
        <p>
          <FaLaptopCode className="message-icon" /> 
          Please view on desktop/laptop for the best experience 💻
        </p>
        <p>
          <BiHappy className="message-icon" />
          This is one of my first React projects! Thanks for checking it out! ✨
        </p>
        <p className="message-note">
          I appreciate your interest! 🙏
        </p>
      </div>
    </div>
  );
};

export default Message;
