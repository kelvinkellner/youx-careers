import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

const q = (msg) => ({
    message: {msg},
    answer: -1
});
const questions = [q("hi?"),q("what's up?")];

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            finished: false,
            now: 0,
            total: questions.length
        }
    }
    render() {
        return(
            <Container id='quiz'>
                <ProgressBar now={(this.state.now) * 100 / this.state.total} label={`Question ${this.state.now} of ${this.state.total}`}/>
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