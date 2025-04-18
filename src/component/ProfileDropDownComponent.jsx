import React from "react";
import star from "../assets/star.png";
import exit from "../assets/exit.png";
import myProfile from "../assets/my profile.png";
import { Link } from "react-router-dom";

const ProfileDropDownComponent = () => {
    return (
        <div
          
          id="toggle-menu"
          className="fixed z-50 bg-[#181a1c] right-5 sm:right-[80px] top-[35px] sm:top-[100px] p-1 rounded-sm text-white text-[10px] font-medium"
        >
          <div className="px-3 py-2 flex items-center gap-1">
            <img className="w-[16px]" src={myProfile} alt="" />
            <span className="text-blue-600">Profil Saya</span>
          </div>
          <div className="px-3 py-2 flex items-center gap-1">
            <img className="w-[16px]" src={star} alt="" />
            <span>Ubah Premium</span>
          </div>
          <Link to="/" className="px-3 py-2 flex items-center gap-1">
            <img className="w-[16px]" src={exit} alt="" />
            <span>Keluar</span>
          </Link>
        </div>
      );
      
};

export default ProfileDropDownComponent;
