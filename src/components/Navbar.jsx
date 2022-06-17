import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">All products</NavLink>
    
    </div>
  );
};

export default Navbar;
