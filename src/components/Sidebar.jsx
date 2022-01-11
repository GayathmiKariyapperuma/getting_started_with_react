import React from "react";
import "./sidebar.css";
import { AiFillAmazonCircle } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <AiFillAmazonCircle /> <span>Amazon</span>
      </button>
      <button>
        <AiFillAmazonCircle /> <span>Amazon</span>
      </button>
      <button>
        <AiFillAmazonCircle /> <span>Amazon</span>
      </button>
      <button>
        <AiFillAmazonCircle /> <span>Amazon</span>
      </button>
    </div>
  );
}

export default Sidebar;
