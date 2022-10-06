import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function About() {
  return (
    <>
      <div className="relative py-12">
        <div className="uppercase absolute top-20 left-[50%] text-center translate-x-[-50%] py-24 ">
          <h1 className="text-[84px] leading-none text-[#2a2a2a] font-medium ">
            BenJAmin oddou
          </h1>
          <h4 className="text-[42px] leading-none text-[#616d97] font-light ">
            PHOTOGRAPHE
          </h4>
        </div>
        <div className="w-[450px] h-[600px] mx-auto z-0 pt-12 ">
          <img
            className="w-full h-full rounded-[120px]"
            src="https://images.unsplash.com/photo-1479492582774-e7244111ed17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[200px] absolute right-[17%] top-[55%] space-y-2">
          <h5 className="text-[#2a2a2a] text-[16px] font-medium ">
            Réservation disponible !
          </h5>
          <p className="text-[#2a2a2a] text-[14px] ">
            Veuillez remplir le formulaire en bas tout en précisant le type de
            réservation.
          </p>
          <hr className="h-[5px] w-[80px] bg-[#2a2a2a]  " />
          <button className="flex items-center space-x-3 pt-2">
            <span className=" w-[50px] h-[50px] rounded-full text-white flex justify-center items-center bg-[#2a2a2a] ">
              <MdKeyboardArrowRight size="30" />
            </span>
            <span className="uppercase text-[#2a2a2a] font-bold">Reserver</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
