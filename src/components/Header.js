import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LoginController from './LoginController';

class Header extends Component {
    render() {
        console.log(this.props.global.state);
        return(
            <Container id='header'>
                <Row>
                    <Col id="logo-col">
                        <Link to="/"><h1 id='logo'>YouX Careers</h1></Link>
                    </Col>
                    <Col className='nav' id='explore-careers'>
                        <ul className='nav-header'>
                            <Link to="/careers"><h5 style={{margin: 0}}>Explore all careers</h5></Link>
                        </ul>
                    </Col>
                    <Col className='nav'>
                        <ul className='nav-header'>
                            <LoginController global={this.props.global} />
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;