import React from "react";
import Logo from "../images/logo.png";
//import ButtonsHome from "./ButtonsHome";
import Entry from "./Entry";
import functionHomePage from "../functionHomePage"


function App() {
  return (
    <div>
      <img src={Logo} className="Logo" />
      <h1 className ="h1">Welcome To The Kaman Portal!
      </h1>
      {functionHomePage.map(funcTerm => (
        <Entry
          key={funcTerm.id}
          img={funcTerm.img}
          name={funcTerm.name}
        />
    ))}
    </div>
  );
}


export default App;
