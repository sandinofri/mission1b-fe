import React from "react";
import dont from "../assets/image 225.png";
import batman from "../assets/batman.png";
import blue from "../assets/blue lock.png";
import otto from "../assets/called otto.png";
const ContinueWatch = () => {
  return (
    <div className="sm:py-10 sm:px-20 px-5 py-1.5 text-white">
      <h3 className="sm:text-3xl text-[20px] font-bold mb-4 mt-4">
        Melanjutkan Tonton Film
      </h3>
      <div className="flex justify-between overflow-x-auto sm:overflow-visible scrollbar-hide scroll-smooth sm:gap-5 gap-3 relative">
        <div className="absolute w-full h-full z-30 sm:flex hidden justify-between items-center">
          <p className="flex items-center justify-center -ms-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            ←
          </p>
          <p className="flex items-center justify-center -me-[20px] w-[40px] h-[40px] rounded-[50px] bg-[#2F3334] cursor-pointer">
            →
          </p>
        </div>
        <div
          id="dont"
          className={
           `w-[250px] h-[160px] shrink-0 relative`
          }
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={dont}
            alt=""
           
          />

          <div className="absolute inset-0 flex items-end p-4 bg-black/40 rounded-lg pointer-events-none">
            <div className="flex justify-between w-full">
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                Don’t Look Up
              </p>
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                <span>⭐</span>4.4/5
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[160px] shrink-0 relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={batman}
            alt=""
          />

          <div className="absolute inset-0 flex items-end p-4 bg-black/40 rounded-lg">
            <div className="flex justify-between w-full">
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                Batman
              </p>
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                <span>⭐</span>4.2/5
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[160px] shrink-0 relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={blue}
            alt=""
          />
          <div className="absolute inset-0 z-49 flex items-start sm:p-4 p-2 rounded-lg">
            <p className="bg-[#0F1E93] py-1 px-2.5 rounded-2xl sm:text-[12px] text-[5px]">
              Episode Baru
            </p>
          </div>
          <div className="absolute inset-0 flex items-end p-4 bg-black/40 rounded-lg">
            <div className="flex justify-between w-full">
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                Blue Lock
              </p>
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                <span>⭐</span>4.6/5
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-[160px] shrink-0 relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={otto}
            alt=""
          />

          <div className="absolute inset-0 flex items-end p-4 bg-black/40 rounded-lg">
            <div className="flex justify-between w-full">
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                A Man Called Otto
              </p>
              <p className="text-white sm:text-[18px] text-[14px] font-bold">
                <span>⭐</span>4.4/5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatch;
