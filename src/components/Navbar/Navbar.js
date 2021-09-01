import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css';
import Logo1 from "./Logo1";

class Navbar extends Component{
  state = { clicked: false }
  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }

  render(){
    return(
      <nav className = "NavbarItems">
        {/* <h1 className = "navbar-logo">React <i className = "fab fa-react"></i></h1> */}
        <Logo1></Logo1>
         {/* <div className = "menu-icon" onClick = {this.handleClick}> */}
        {/* <i className = {this.state.clicked ? 'fas fa-time' : 'fa fa-bars'}></i> */}
        {/* </div> */}
        <ul className = {this.state.clicked ? 'nav-menu activate' :
      'nav-menu'}>
          {
              MenuItems.map((item , index) => {
              return(
              <li key = {index}>
                    <a className = { item.cName } href = {item.url}> 
                    {item.title }
                    </a>
             </li>

              )
             } )
          }
          
          
        </ul>
        <Button>Get in Touch</Button>
      </nav>
    )
  }
}

export default Navbar
