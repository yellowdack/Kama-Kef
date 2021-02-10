import React from 'react';
import './Card.css';


function Card(props) {
  return (
    //add class name to card
    <div className='card-container'>
      <div className='image-container'>
        <img src={require('../images/dashboard.png')} alt='' />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.body}</p>
        </div>
        </div>
    </div>

  )
}

export default Card
