import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1 className="flex w-full flex-col bg-slate-300 p-4 text-center text-4xl">
        Navbar
      </h1>
      <br />

      <ul className="flex gap-3 justify-center items-center underline font-bold">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/products">PRODUCTS</NavLink></li>
        <li><NavLink to="/user-auth/login">LOGIN</NavLink></li>
        <li><NavLink to="/productsCard">PRO CARD</NavLink></li>
        
      </ul>
      <br />
      <br />
    </>
  );
}

export default Navbar;
