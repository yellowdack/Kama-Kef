import React from "react";
import Logo from "../images/logo.png";
import ButtonsHome from "./ButtonsHome";

function App() {
  return (
    <div>
      <div className="top">
        <img src={Logo} className="Logo" />;
        <h1 className ="h1">Welcome To The Kaman Portal!
        </h1>
        <ButtonsHome />
      </div>
    </div>

  );
}



export default App;
