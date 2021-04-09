import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LoginController from './LoginController';

class Header extends Component {
    clearTempJob() {
        
    }
    render() {
        console.log(this.props.global.state);
        const pathname = window.location.pathname;
        return(
            <Container id='header'>
                <Row>
                    <Col id="logo-col">
                        <Link to="/" onClick={() => this.props.global.setState({ tempJob: null })}><h1 id='logo'>YouX Careers</h1></Link>
                    </Col>
                    <Col className='nav nav-header-text-style'>
                        <ul className='nav-header'>
                            <Link to="/careers" onClick={() => this.props.global.setState({ tempJob: null })}><h5 style={{margin: 0}}>Explore all careers</h5></Link>
                        </ul>
                    </Col>
                    {pathname === '/' ? <></> : (
                    <Col className='nav nav-header-text-style'>
                        <ul className='nav-header'>
                            <Link to="/" onClick={() => this.props.global.setState({ tempJob: null })}><h5 style={{margin: 0}}>{this.props.global.state.isQuizActive? "Return to quiz" : "Take the quiz"}</h5></Link>
                        </ul>
                    </Col>
                    )}
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