import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import Beranda from "./pages/Beranda";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Film from "./pages/Film";
import Series from "./pages/Series";
import DaftarSaya from "./pages/DaftarSaya";
import Register from "./pages/Register";

function App() {
  return (
    
    <div className="bg-[#181a1c]">
      <BrowserRouter>      
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/series" element={<Series />} />
          <Route path="/film" element={<Film />} />
          <Route path="/daftar saya" element={<DaftarSaya />} />
          <Route path="/*" element={<Login isVisible={false}/>} />
          <Route path="/register" element={<Register isVisible={false}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
