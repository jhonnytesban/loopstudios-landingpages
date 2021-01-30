import React, {Fragment} from 'react';
import '../styles/Landing.css';
// import Header from '../assets/images/mobile/image-hero.jpg';
import Logo from '../assets/images/logo.svg';
import Menu from '../assets/images/icon-hamburger.svg';
import Interactive from '../assets/images/mobile/image-interactive.jpg';
import IconFacebook from '../assets/images/icon-facebook.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconPinterest from '../assets/images/icon-pinterest.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Landing = () => {
  return(
    <Fragment>
      <header className="header">
        {/* <img  className="header__img" src={Header} alt=""/> */}
        <div className="container-header">
          <img className="container-header__logo" src={Logo} alt=""/>
          <img className="container-header__hamburger" src={Menu} alt=""/>
        </div>
        <div className="container-slogan">
          <p className="container-slogan__text">inmersive experiences that deliver</p>
        </div>
      </header>
      <main className="main">
        <article className="article">
          <img className="main__interactive" src={Interactive} alt=""/>
          <section className="section">
            <h2 className="subtitle">the leader in interactive vr</h2>
            <p className="section__text">Founded in 2001, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winnig creations have transformed businesses through digital experiences that bind to their brand.</p>
          </section>
        </article>
        <section className="section">
          <h2 className="subtitle">our creations</h2>
          <div className="section-img">
            <p className="img__title">deep hearth</p>
          </div>
          <div className="section-img">
            <p className="img__title">night arcade</p>
          </div>
          <div className="section-img">
            <p className="img__title">soccer team vr</p>
          </div>
          <div className="section-img">
            <p className="img__title">the grid</p>
          </div>
          <div className="section-img">
            <p className="img__title">from up above vr</p>
          </div>
          <div className="section-img">
            <p className="img__title">pocket borealis</p>
          </div>
          <div className="section-img">
            <p className="img__title">the curiosity</p>
          </div>
          <div className="section-img">
            <p className="img__title">make it fisheye</p>
          </div>
          <button className="button">see all</button>
        </section>
      </main>
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
    </Fragment>
  )
}

export default Landing;