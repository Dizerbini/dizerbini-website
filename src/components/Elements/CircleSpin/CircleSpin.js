import React from 'react';
import ImgCircleSpin from '../../../images/logo/logoy.png';
import './CircleSpin.css';

function CircleSpin() {
  return (
    <>
      <div className="circleSpinContainer">
        <div className="outsideCircleSpin">
          <div className="mainImgOutsideCircle">
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
            <div className="outsideCircle"></div>
          </div>
          <img src={ImgCircleSpin} alt=""></img>
        </div>
      </div>
    </>
  );
}

const MainCircle = document.querySelector('.mainImgCircleSpin');

function ActiveCircle() {
  MainCircle.classList.toggle('active');
}

MainCircle.addEventListener('click', ActiveCircle());

export default CircleSpin;
