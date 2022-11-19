import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/profile" style={{ marginRight: "10px" }}>
          Profile
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
