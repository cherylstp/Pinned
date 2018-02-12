import React, { Component } from 'react';



//This imports are needed so that bootstrap components can be able to be used
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Container,
    Row,
    Col } from 'reactstrap';


//Make sure that the class matches the file name!!
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Header"> 
           <Navbar  light expand="md" text-light color="info " >
           <NavbarBrand href="/">Pinned</NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/home">Home</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/shared">Shared With Me</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/">New Trip</NavLink>
               </NavItem>
               <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                   Hello, user!
                 </DropdownToggle>
                 <DropdownMenu >
                   <DropdownItem>
                     Profile
                   </DropdownItem>
                   <DropdownItem>
                     My Account
                   </DropdownItem>
                   <DropdownItem divider />
                   <DropdownItem>
                     Logout
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
             </Nav>
           </Collapse>
         </Navbar>
       
      </div>
    );
  }
}

export default Header;
