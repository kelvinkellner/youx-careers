import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

const q = (msg) => ({
    message: msg,
    choice: 0
});
const questions = {
    1: q("hi?"),
    2: q("what's up?")
};

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.storeToQ = this.storeToQ.bind(this);
        this.loadFromQ = this.loadFromQ.bind(this);
        this.state = {
            ids: Object.keys(questions),
            now: 1,
            total: Object.keys(questions).length,
            choice: 0
        }
    }
    handleNextClick() {
        // this.storeToQ();
        questions[this.state.ids[this.state.now-1]].choice = this.state.choice;
        this.setState({choice: questions[this.state.ids[this.state.now]].choice, now: this.state.now+1});
        // this.loadFromQ();
    }
    handleBackClick() {
        // this.storeToQ();
        questions[this.state.ids[this.state.now-1]].choice = this.state.choice;
        this.setState({choice: questions[this.state.ids[this.state.now-2]].choice, now: this.state.now-1});
        // this.loadFromQ();
    }
    storeToQ() {
        questions[this.state.ids[this.state.now-1]].choice = this.state.choice;
    }
    loadFromQ() {
        this.setState({choice: questions[this.state.ids[this.state.now-1]].choice});
    }
    render() {
        const q = this.state.now > 0 ? questions[this.state.ids[this.state.now-1]] : null;
        const show = this.state.now > 0 ? (<>
            <Row style={{width: "100%"}}>
                <Col>
                    <Row style={{justifyContent: "center"}}><ProgressBar now={(this.state.now) * 100 / this.state.total}/></Row>
                    <Row style={{justifyContent: "center"}}><p>Question {this.state.now} of {this.state.total}</p></Row>
                </Col>
            </Row>
            <Row>
                <h2 style={{marginTop: "1em"}}>{q.message}</h2>
            </Row>
            <Row>
                <Col>
                    <ul class='quiz-choice'>
                        {[...Array(5).keys()].map(x =>
                            <Row><Button variant='quiz-choice' className={this.state.choice === (x+1) ? 'active' : ''} onClick={()=>this.setState({choice: x+1})}>{x+1}</Button></Row>
                        )}
                    </ul>
                </Col>
                <Col>
                    <Button onClick={this.handleBackClick} variant="secondary">Back</Button>
                    <Button onClick={this.handleNextClick}>Next</Button>
                </Col>
            </Row>
        </>) : (<>
            <Row>   
                <h4 style={{margin: "3.2em"}}>Find out which UX Career is right for you.</h4>
            </Row>
            <Row>
                <h1>Take the Quiz</h1>
            </Row>
            <Row>
                <Button onClick={() => this.setState({now: this.state.now+1})}>Start</Button>
            </Row>
        </>)
        return(
            <Container id='quiz'>
                {show}
            </Container>
        );
    }
}

export default Quiz;