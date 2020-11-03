import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp </h1>
                                <h2>A better way to camp</h2>
                            </div>
                        </div>

                    </div>
                </Jumbotron>


                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="Nucamp Logo"></img></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} /> 
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg">Home</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg">Directory</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg">About</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg">Contact Us</i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;