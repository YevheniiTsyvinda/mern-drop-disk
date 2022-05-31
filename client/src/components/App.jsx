import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "./navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registration from "./registration/Registration";



function App() {
  const { store } = useContext(Context);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/registration" element={Registration} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
