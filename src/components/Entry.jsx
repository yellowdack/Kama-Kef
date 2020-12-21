import React from "react";


function handleClick(){
  console.log("i clickes");
}
function Entry(props) {
  return (
    <div className="note">
      <button onClick={handleClick}>
        <h1>{props.name}</h1>
        <img className="img-home" src={props.img} alt="pic"/>
      </button>
    </div>
  );
}

export default Entry;
