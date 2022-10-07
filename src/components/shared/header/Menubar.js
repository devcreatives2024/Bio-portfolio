import { motion } from "framer-motion";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Menubar() {
  return (
    <>
      <div className="fixed w-full z-40 bg-white">
        <div className="flex justify-around items-center h-[92vh]">
          <div className="w-[250px] h-[320px] ">
            <motion.img
              drag
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="">
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
        <div className="flex justify-center items-center space-x-16 pb-8">
          <div className="w-[30px] h-[24px]">
            <BsInstagram size="full" />
          </div>
          <div className="w-[30px] h-[30px]">
            <FiYoutube size="full" />
          </div>
          <div className="w-[30px] h-[30px]">
            <MdOutlineMail size="full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menubar;
