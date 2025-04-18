import React from "react";
import arrow from "../assets/keyboardArrowDown.png";
import { useState } from "react";
import GenreButtonComponent from "./GenreButtonComponent";

const GenreComponent = () => {
 
  return (
    <div className="absolute">
        <div className="flex p-5 bg-[#22282A] gap-10 rounded-[10px] mt-1 text-sm leading-[30px]">
          <div>
            <p>Aksi</p>
            <p>Anak-anak</p>
            <p>Anime</p>
            <p>Britania</p>
            <p>Britania</p>
            <p>Drama</p>
            <p>Fantasi-ilmiah & fantasi</p>
            <p>Kejahatan</p>
          </div>
          <div>
            <p>Aksi</p>
            <p>Anak-anak</p>
            <p>Anime</p>
            <p>Britania</p>
            <p>Britania</p>
            <p>Drama</p>
            <p>Fantasi-ilmiah</p>
            <p>Kejahatan</p>
          </div>
        </div>
      
    </div>
  );
};

export default GenreComponent;
