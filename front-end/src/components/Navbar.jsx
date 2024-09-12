import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1 className="flex w-full flex-col bg-slate-300 p-4 text-center text-4xl">
        Navbar
      </h1>

      <div className="m-6">
        <NavLink to="/" Home> Home </NavLink>
      </div>
    </>
  );
}

export default Navbar;
