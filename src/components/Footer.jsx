import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/images/logo.svg';
import IconFacebook from '../assets/images/icon-facebook.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconPinterest from '../assets/images/icon-pinterest.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Footer = () => {
  return(
    <footer className="footer">
        <img className="footer__img" src={Logo} alt=""/>
        <p className="footer__text">About</p>
        <p className="footer__text">Careers</p>
        <p className="footer__text">Events</p>
        <p className="footer__text">Products</p>
        <p className="footer__text">Support</p>
        <div className="footer-icons">
          <img className="icons__img" src={IconFacebook} alt=""/>
          <img className="icons__img" src={IconInstagram} alt=""/>
          <img className="icons__img" src={IconPinterest} alt=""/>
          <img className="icons__img" src={IconTwitter} alt=""/>
        </div>
        <p className="footer__info">© 2021 Loopstudios. All rights reserved.</p>
      </footer>
  )
}

export default Footer;