import React from "react";
import "./navbar.css";
import { AiFillAlipayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <AiFillAlipayCircle className="companyLogo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/get-help">Get Help</Link>
      </div>
    </div>
  );
}
