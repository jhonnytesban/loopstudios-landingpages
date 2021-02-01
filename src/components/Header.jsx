import React from 'react';
import '../styles/Header.css'
import Logo from '../assets/images/logo.svg';
import Menu from '../assets/images/icon-hamburger.svg';
import Close from '../assets/images/icon-close.svg';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: "deactive"
    }
  }
  render() {

    const handleMenu = () => {
      if (this.state.style === "active") {
        this.setState({
          style: "deactive"
        })
      }else if(this.state.style === "deactive") {
        this.setState({
          style: "active"
        })
      }
    }

    return(
      <header className="header">
            <nav className={this.state.style}>
              <div className="menu-mobile">
                <img className="container-header__logo" src={Logo} alt=""/>
                <img className="container-header__hamburger" src={Close} alt="" onClick={handleMenu}/>
              </div>
              <ul className="menu">
                <li className="menu__item"><a className="link" href="#">About</a></li>
                <li className="menu__item"><a className="link" href="#">Careers</a></li>
                <li className="menu__item"><a className="link" href="#">Events</a></li>
                <li className="menu__item"><a className="link" href="#">Products</a></li>
                <li className="menu__item"><a className="link" href="#">Support</a></li>
              </ul>
            </nav>
          <div className="container-header">
            <img className="container-header__logo" src={Logo} alt=""/>
            <img className="container-header__hamburger" src={Menu} alt="" onClick={handleMenu}/>
            <nav className="nav-desktop">
              <ul className="desktop-menu">
                <li className="menu__item"><a href="" className="link__desktop">About</a></li>
                <li className="menu__item"><a href="" className="link__desktop">Careers</a></li>
                <li className="menu__item"><a href="" className="link__desktop">Events</a></li>
                <li className="menu__item"><a href="" className="link__desktop">Products</a></li>
                <li className="menu__item"><a href="" className="link__desktop">Support</a></li>
              </ul>
            </nav>
          </div>
          <div className="container-slogan">
            <p className="container-slogan__text">inmersive experiences that deliver</p>
          </div>
        </header>
    )
  }
}

// const Header = () => {

//   let active = "nav "

  

  
// }

export default Header;