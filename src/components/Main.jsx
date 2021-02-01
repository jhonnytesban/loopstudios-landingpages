import React from 'react';
import Interactive from '../assets/images/mobile/image-interactive.jpg';
import '../styles/Main.css';

const Main = () => {
  return(
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
  )
}

export default Main;