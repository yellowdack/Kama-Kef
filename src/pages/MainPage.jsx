import React from "react";
import Card from '../components/Card'
import contacts from "../functionHomePage"



function handleClick(){
  console.log("i clickes");
}
function MainPage(props){
  return (
    <div>
    <h1 className ="h1">Welcome to Kaman Portal</h1>
      <Card
      title={contacts[0].title}
      imageUrl={contacts[0].img}
      body={contacts[0].body}/>
      <Card
      title={contacts[1].title}
      imageUrl={contacts[1].img}
      body={contacts[1].body}/>
      <Card
      title={contacts[2].title}
      imageUrl={contacts[2].img}
      body={contacts[2].body}/>
      <Card
      title={contacts[3].title}
      imageUrl={contacts[3].img}
      body={contacts[3].body}/>
      <Card
      title={contacts[4].title}
      imageUrl={contacts[4].img}
      body={contacts[4].body}/>
      <Card
      title={contacts[5].title}
      imageUrl={contacts[5].img}
      body={contacts[5].body}/>
      <button onClick={handleClick}>view more</button>
    </div>
  );
}

export default MainPage;
