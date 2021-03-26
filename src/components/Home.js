import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Footer from './Footer';
import Header from './Header';
import Quiz from './Quiz';

class Home extends Component { 
    render() {
        return(
            <>
                <Header />
                <Container id='home' className='main'>
                    <Quiz />
                </Container>
                <Footer />
            </>
        );
    }
}

export default Home;