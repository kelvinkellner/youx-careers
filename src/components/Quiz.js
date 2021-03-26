import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Quiz extends Component {
    render() {
        return(
            <Container id='quiz'>
                <Row>
                    <h2>Question question.... hmmm... thoughts?</h2>
                </Row>
                <Row>
                    <ul class='quiz-choice'>
                        <li><Button variant='quiz-choice'>1</Button></li>
                        <li><Button variant='quiz-choice'>2</Button></li>
                        <li><Button variant='quiz-choice'>3</Button></li>
                        <li><Button variant='quiz-choice'>4</Button></li>
                        <li><Button variant='quiz-choice'>5</Button></li>
                    </ul>
                </Row>
                <Row>
                    <Button>Next</Button>
                </Row>
            </Container>
        );
    }
}

export default Quiz;