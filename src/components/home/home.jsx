import React from 'react';
import './home.css';
import img from '../images/logo/logoy.png';
import { GiClick } from 'react-icons/gi';

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={img} alt=""></img>
      </div>

      <a href="#contact" className="click-down">
        <hr />
        <h5>Contatos</h5>
        <GiClick className="click" />
        <hr />
      </a>
      <h2>
        <span>Who am I?</span>

        <br />
        <p>
          I am a front-end web development professional for JavaScript
          applications with ReactJS and its libraries. I use pure CSS,
          bootstrap, tailswindcss, chackaUI and radixUI to style my interfaces.
        </p>
      </h2>
    </div>
  );
}

export default Home;
