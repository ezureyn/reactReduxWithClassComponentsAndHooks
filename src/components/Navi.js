import React from 'react'
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from "reactstrap"
import { FaAnchor } from 'react-icons/fa'
import "../cssfiles/Navi.css"
import { withRouter } from "react-router-dom";





function Navi({history}) {

  //In order to prevent page refresh, we will not use direct Link tags
  //We should avoid page refreshing because of state reset.
  //When page refreshes the states from reducers turns back to initial state.
  //We will create function and call history.push function in them 
  //By these function we will implement routing
  const secondpageChange=(e)=>{
    e.preventDefault()
   history.push("/secondpage")
  }

  const homepageChange=(e)=>{
    e.preventDefault()
   history.push("/")
  }

    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand>
            <FaAnchor size="2em" />
            <span className="span-1">Counter</span>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink onClick={(e)=>homepageChange(e)}>
              Anasayfa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>secondpageChange(e)}>
              SecondPage
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
}

//Now we should wrap our component with an high order function called withRouter
//This will enable routing without refreshing the page
export default withRouter(Navi);