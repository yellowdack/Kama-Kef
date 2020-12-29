import React, {useState, useEffect} from "react";
import Logo from "../images/logo.png";
//import ButtonsHome from "./ButtonsHome";
import Entry from "./Entry";
import functionHomePage from "../functionHomePage"


function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=> {
    fetch('/tableToo').then(
      response => response.json()
    ).then(data => console.log(data))
  }, []);

  return (
    <div>
      <img src={Logo} className="Logo" />
      <h1 className ="h1">Welcome to Kaman Portal
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
