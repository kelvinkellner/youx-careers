import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends Component {
    render() {
        return(
            <Container id='header'>
                <Row>
                    <Col id="logo-col">
                        <Link exact to="/"><h1 id='logo'>Logo</h1></Link>
                    </Col>
                    <Col classname='nav'>
                        <Link to="/careers">Explore all careers</Link>
                    </Col>
                    <Col>
                        <ul id='nav-header' className='nav'>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;