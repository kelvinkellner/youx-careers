import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Quiz from '../Quiz';

class Home extends Component { 
    render() {
        return(
            <Container id='home' className='main'>
                <Quiz global={this.props.global} />
            </Container>
        );
    }
}

export default Home;