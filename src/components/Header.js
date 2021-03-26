import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends Component {
    render() {
        return(
            <Container id='header'>
                <Row>
                    <Col>
                        <h1 id='logo'>Logo</h1>
                    </Col>
                    <Col>
                        <ul id='nav-header' className='nav'>
                            <li>Home</li>
                            <li>Login</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;