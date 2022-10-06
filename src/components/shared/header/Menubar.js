import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

function Menubar() {
  return (
    <>
      <div className="flex justify-around h-screen">
        <div className="w-[250px] h-[320px] ">
          <motion.img
            drag
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="grid items-center">
          <nav className="text-[60px] uppercase text-center font-medium space-y-4 ">
            <NavLink className="block" to="/">
              Accueil
            </NavLink>
            <NavLink className="block" to="/">
              Galerie
            </NavLink>
            <NavLink className="block" to="/">
              A Propos
            </NavLink>
          </nav>
        </div>
        <div className="w-[250px] h-[320px] ">
          <motion.img
            drag
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Menubar;
