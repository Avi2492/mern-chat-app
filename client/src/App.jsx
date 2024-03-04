import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-gray-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
