import React, { useContext, useEffect } from "react";
import { Context } from "..";
import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom"
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import Home from "./home/Home";



function App() {
  const {store} = useContext(Context);
  useEffect(()=>{
     store.auth();
  },[])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
