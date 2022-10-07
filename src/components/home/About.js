import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

function About() {
  return (
    <>
      {/* about section  */}
      <div className="relative py-12">
        <div className="uppercase absolute top-20 left-[50%] text-center translate-x-[-50%] py-24 ">
          <h1 className="flex space-x-3 text-[30px] sm:text-[54px] md:text-[64px] lg:text-[74px] xl:text-[84px] leading-none text-[#2a2a2a] font-medium ">
            <span>BenJAmin</span> <span>oddou</span>
          </h1>
          <h4 className="text-[20px] sm:text-[24px] md:text-[34px] lg:text-[42px] leading-none text-[#616d97] font-light ">
            PHOTOGRAPHE
          </h4>
        </div>
        <div className="w-[60%] h-[500px] sm:w-[350px] sm:h-[550px] md:w-[400px] md:h-[570px] lg:w-[450px] lg:h-[600px] mx-auto z-0 pt-12 ">
          <img
            className="w-full h-full rounded-[120px]"
            src="https://images.unsplash.com/photo-1479492582774-e7244111ed17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="hidden sm:block w-[200px] absolute right-[5%] lg:right-[10%] xl:right-[17%] top-[55%] space-y-2">
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
      {/* info section  */}
      <div className="py-32">
        <div className="text-center space-y-8">
          <p className="text-[24px] md:text-[28px] lg:text-[34px] xl:text-[47px] font-thin space-y-2 md:space-y-3 lg:space-y-4 text-[#2a2a2a] ">
            <span className="sm:block">
              Pour moi,
              <i className="font-normal"> la photographie </i>
              représente le
            </span>
            <span className="sm:block">
              moyen de matérialiser nos
              <i className="font-normal"> souvenirs </i>
            </span>
            <span className="sm:block">
              et nos <i className="font-normal"> émotions vécues </i>{" "}
            </span>
          </p>
          <div>
            <hr className="h-[5px] w-[90px] mx-auto bg-[#2a2a2a]  " />
          </div>
          <div className="flex justify-center">
            <button className="text-[16px]md:text-[20px] xl:text-[26px] group font-medium uppercase flex space-x-2 text-[#2a2a2a] ">
              <span>À propos de Benjamin</span>{" "}
              <HiArrowRight className="rotate-[-45deg] group-hover:rotate-[0deg] transition duration-500 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
