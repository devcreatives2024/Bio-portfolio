import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Gallary() {
  return (
    <>
      <div className="px-[150px] py-40">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <img
              className="w-full h-full z-50 opacity-[99%] "
              src="https://images.unsplash.com/photo-1665055651711-a06269bf8311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text-[#2a2a2a] py-12 space-y-4">
            <div>
              <h4 className="text-[18px] font-medium uppercase">
                mes photographies
              </h4>
              <p className="text-[42px] font-thin">
                Paysage / Mariage / Portrait / Nature / Architecture /
                Astrophotographie
              </p>
            </div>
            <hr className="h-[5px] w-[90px] bg-[#2a2a2a]" />
            <button className="text-[26px] group font-medium uppercase flex space-x-2 text-[#2a2a2a] ">
              <span>voir la galerie</span>{" "}
              <HiArrowRight className="rotate-[-45deg] group-hover:rotate-[0deg] transition duration-500 " />
            </button>
          </div>
        </div>
        <div className="w-[65%] ml-auto mt-[-30px] ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1661215850867-d2023fe21231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[65%] pt-12 ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTUxfDByOFp2WFV0T2ZrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[42%] ml-auto mt-[-30px] ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1564354416649-691d1a73a1fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTB8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[42%]  mt-[-250px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1564354416649-691d1a73a1fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTB8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[65%] ml-auto mt-[-100px] ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTUxfDByOFp2WFV0T2ZrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[65%] ml-auto pt-[100px] ">
          <img
            className="w-full grayscale"
            src="https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTUxfDByOFp2WFV0T2ZrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[42%]  mt-[-300px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1564354416649-691d1a73a1fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTB8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[42%] ml-auto  mt-[-300px] z-50 opacity-[99%]  ">
          <img
            className="w-full "
            src="https://images.unsplash.com/photo-1564354416649-691d1a73a1fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTB8MHI4WnZYVXRPZmt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-[65%]  mt-[-100px] ">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTUxfDByOFp2WFV0T2ZrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Gallary;
