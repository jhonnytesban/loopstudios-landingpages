import React, {Fragment} from 'react';
import '../styles/Landing.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Landing = () => {
  return(
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default Landing;