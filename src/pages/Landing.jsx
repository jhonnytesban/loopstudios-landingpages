import React, {Fragment} from 'react';
import '../styles/Landing.css';
// import Header from '../assets/images/mobile/image-hero.jpg';
import Logo from '../assets/images/logo.svg';
import Menu from '../assets/images/icon-hamburger.svg';
import Interactive from '../assets/images/mobile/image-interactive.jpg';

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
          
        </section>
      </main>
    </Fragment>
  )
}

export default Landing;