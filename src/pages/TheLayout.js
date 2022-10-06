import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Honors from "../components/shared/Honors";
import Home from "./Home";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="fixed top-[50%] translate-y-[-50%] ">
          <Honors />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
