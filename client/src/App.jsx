import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-gray-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
