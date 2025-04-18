import React from "react";
import { Link } from "react-router-dom";
import roll from "../assets/movie-open.png";
import google from "../assets/goggle.png";
import InputFieldComponent from "./InputFieldComponent";


const CardFormComponent = ({isVisible,text1,text2,link1,link2,question}) => {
  return (
    <div className="bg-[#141618] opacity-90 p-6 rounded-lg shadow-2xl">
      <div className="text-center mb-[15px]">
        <div className="flex items-center justify-center gap-1">
          <img className="w-[36px] h-[30px]" src={roll} alt="" />
          <h5 className="text-white text-3xl font-bold mt-1">CHILL</h5>
        </div>
        <h6 className="text-white text-2xl font-bold mt-[15px]">{text1}</h6>
        <p className="text-white text-[10px] font-light">Selamat datang!</p>
      </div>
      <div>
        <InputFieldComponent
          text={"Username"}
          placeholder={"Masukan username"}
          type={"text"}
          isVisible={false}
        />
        <InputFieldComponent
          text={"Password"}
          placeholder={"Masukan kata sandi"}
          type={"password"}
          isVisible={true}
        />
        {isVisible && (
          <InputFieldComponent
            text={"Konfirmasi Kata Sandi"}
            placeholder={"Masukan kata sandi"}
            type={"password"}
            isVisible={true}
          />
        )}

        <div className="flex justify-between">
          <small className="text-slate-500 text-[10px]">
            {question}
            <Link to={link1} className="text-white ms-[5px]">
              {text2}
            </Link>
          </small>
          <small className="text-white text-[10px] cursor-pointer">
            Lupa kata sandi?
          </small>
        </div>
        <Link
          to={link2}
          className="flex items-center justify-center mt-[15px] border border-white text-white text-[10px] w-[250px] h-[30px] rounded-2xl  font-bold bg-slate-500"
        >
            {text1}
        </Link>
        <small className="text-slate-500 text-[10px] text-center block my-[5px]">
          Atau
        </small>
        <button className="flex items-center justify-center gap-x-2 border border-white text-white text-[10px] w-[250px] h-[30px] rounded-2xl font-bold">
          <img className="w-[10px]" src={google} alt="" />
          Daftar dengan Google
        </button>
      </div>
    </div>
  );
};

export default CardFormComponent;
