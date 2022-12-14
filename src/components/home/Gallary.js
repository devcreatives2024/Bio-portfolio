import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Gallary() {
  return (
    <>
      <div className="px-[20px] sm:px-[50px] md:px-[75px] lg:px-[110px] xl:px-[150px] py-12 lg:py-40 ">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="order-last sm:order-first">
            <img
              className="w-full h-full z-50 opacity-[99%] "
              src="https://www.benjaminoddou-photographe.com/assets/c-1-910w.c0bba319.webp"
              alt=""
            />
          </div>
          <div className="text-[#2a2a2a] lg:py-12 space-y-4">
            <div>
              <h4 className="text-[14px] md:text-[26px] lg:text-[18px] font-medium uppercase">
                mes photographies
              </h4>
              <p className="text-[28px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[42px] font-thin">
                Paysage / Mariage / Portrait / Nature / Architecture /
                Astrophotographie
              </p>
            </div>
            <hr className="h-[5px] w-[90px] bg-[#2a2a2a]" />
            <button className="text-[16px]md:text-[20px] xl:text-[26px] group font-medium uppercase flex space-x-2 text-[#2a2a2a] ">
              <span>voir la galerie</span>{" "}
              <HiArrowRight className="rotate-[-45deg] group-hover:rotate-[0deg] transition duration-500 " />
            </button>
          </div>
        </div>
        <div className="sm:w-[65%] ml-auto mt-5 sm:mt-[-30px] ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1661215850867-d2023fe21231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[65%] mt-5 sm:mt-0 sm:pt-12 ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1546914857-f9712ac61f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGJlYXV0aWZ1bCUyMHBsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[42%] ml-auto mt-5 sm:mt-[-30px] ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1600693274167-55a421498554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxiZWF1dGlmdWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[42%] mt-5 sm:mt-[-50px] md:mt-[-150px] lg:mt-[-250px] xl:mt-[-250px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1545073334-9cb53498f1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[65%] ml-auto mt-5 sm:mt-[-100px] md:mt-[-100px] lg:mt-[-100px] xl:mt-[-100px] ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1467830839049-11173e7b2755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGlsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[65%] ml-auto mt-5 sm:pt-[60px] md:pt-[80px] lg:pt-[100px] ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1535470614242-bf41943a99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGhpbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[42%] mt-5 sm:mt-[-150px]  lg:mt-[-200px] xl:mt-[-300px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[42%] ml-auto mt-5 sm:mt-[-150px] lg:mt-[-200px] xl:mt-[-300px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1501594852399-9b80db815224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="sm:w-[65%] mt-5 sm:mt-[-100px] ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxiZWF1dGlmdWwlMjBwbGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Gallary;
