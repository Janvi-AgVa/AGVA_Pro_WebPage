import React  from 'react'
import LOGO from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/AgVa.png";
function Navbar() {





  return (
    <div className='NavBar'>         
          <img src={LOGO} alt=""/>
          <input type="checkbox" id="click"/>
            <label for="click" class="menu-btn">
              <i class="fas fa-bars"></i>
            </label>
           <ul className="nav-menu" >
                <li ><a href='#home' class="active" id="home">Home</a></li>
                <li ><a href='#home'>About Us</a></li>
                <li ><a href='#home'>Contact Us</a></li>
                <li ><a href='#home'>Press</a></li>
            </ul>
          
    </div>
  )
}

export default Navbar