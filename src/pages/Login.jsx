import React from "react";
import CardFormComponent from "../component/CardFormComponent";


const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center body-bg">
      <CardFormComponent isVisible={false} text1={"Masuk"} text2={"Daftar"} link1={"/register"} link2={"/beranda"} question={"Belum punya akun?"}/>
    </div>
  );
};

export default Login;
