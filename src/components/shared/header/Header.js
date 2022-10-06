import { motion } from "framer-motion";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { HiArrowNarrowUp } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="px-6 py-4 flex justify-between">
        <div className="w-[50px] h-[50px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M26.2361 50.3759C30.4027 49.3342 34.3611 46.0702 34.3611 39.6812C34.3611 25.6535 18.1805 26.0008 18.1805 26.0008H2V74.6119H18.1805C21.4444 74.6119 35.0554 73.9869 35.0554 60.6535C35.0554 60.6535 35.4027 52.2509 26.2361 50.3759ZM10.0555 34.0563H18.1805C18.1805 34.0563 26.2361 33.709 26.2361 40.2368C26.2361 46.2785 18.1805 46.2785 18.1805 46.2785H10.0555V34.0563ZM18.1805 66.5563H10.0555V54.4035H18.1805C18.1805 54.4035 26.9305 53.9172 26.9305 60.4452C26.9304 65.7229 21.5834 66.5562 18.1805 66.5562V66.5563Z"></path>
            <path d="M56.3308 38.4998C46.4001 38.4998 38.2751 46.6248 38.2751 56.5555C38.2751 66.4862 46.4001 74.6112 56.3308 74.6112C66.2614 74.6112 74.3861 66.4862 74.3861 56.5555C74.3861 46.6248 66.2611 38.4998 56.3308 38.4998ZM56.3308 66.5555C50.7751 66.5555 46.3308 62.1112 46.3308 56.5555C46.3308 50.9998 50.7751 46.5555 56.3308 46.5555C61.8864 46.5555 66.3304 50.9998 66.3304 56.5555C66.3304 62.1112 61.8861 66.5555 56.3308 66.5555Z"></path>
            <path d="M40.4974 34.061H72.5804V26.0055H40.4974V34.061Z"></path>
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[40px] hidden">
            <MdDarkMode size="full" />
          </div>
          <motion.div
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: [180, 270, 360],
            }}
            transition={{
              loop: Infinity,
              duration: 5,
              type: "tween",
            }}
            className="w-[40px]"
          >
            <MdLightMode size="full" />
          </motion.div>
          <div className="w-[40px] group">
            <BiMenu className="group-hover:hidden " size="full" />
            <HiArrowNarrowUp className="group-hover:block hidden" size="full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
