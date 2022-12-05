import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../Assets/pizza.jpeg'
import '../Styles/Home.css'


function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Youri Pizza</h1>
        <p> De lekkerste pizza's ter wereld! </p>
        <Link to="/menu">
          <button> Bestel Nu! </button>
        </Link>
      </div>
        
    </div>
  )
}

export default Home