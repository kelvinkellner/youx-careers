import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LoginController from './LoginController';

class Header extends Component {
    render() {
        return(
            <Container id='header'>
                <Row>
                    <Col id="logo-col">
                        <Link exact to="/"><h1 id='logo'>Logo</h1></Link>
                    </Col>
                    <Col className='nav' id='explore-careers'>
                        <ul className='nav-header'>
                            <Link to="/careers">Explore all careers</Link>
                        </ul>
                    </Col>
                    <Col className='nav'>
                        <ul className='nav-header'>
                            <LoginController />
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;