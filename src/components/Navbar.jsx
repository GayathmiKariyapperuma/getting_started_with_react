import React from "react";
import "./navbar.css";
import { AiFillAlipayCircle } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <AiFillAlipayCircle className="companyLogo" />
      <div className="links">
        <button>Home</button>
        <button>Contact</button>
        <button>Get Help</button>
      </div>
    </div>
  );
}
