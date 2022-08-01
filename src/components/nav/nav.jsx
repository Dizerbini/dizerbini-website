import './nav.css';
import React from 'react';
import { SiHomeassistant } from 'react-icons/si';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { MdConnectWithoutContact, MdDesignServices } from 'react-icons/md';

function Nav() {
  setTimeout(() => {
    let icons = document.querySelectorAll('.navigation .icon');

    icons.forEach((icon) => {
      icon.addEventListener('click', () => {
        changeactive();
        icon.classList.add('active-nav');
      });
    });

    function changeactive() {
      icons.forEach((icon) => {
        icon.classList.remove('active-nav');
      });
    }
  }, 1000);

  return (
    <>
      <div className="navigation">
        <a href="#home">
          <SiHomeassistant className="icon active-nav" />
        </a>
        <a href="#about">
          <FaUserAstronaut className="icon" />
        </a>
        <a href="#projects">
          <AiTwotoneExperiment className="icon" />
        </a>
        <a href="#design">
          <MdDesignServices className="icon" />
        </a>
        <a href="#contact">
          <MdConnectWithoutContact className="icon" />
        </a>
      </div>
    </>
  );
}

export default Nav;
