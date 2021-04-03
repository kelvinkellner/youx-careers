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
        this.state = {
            ids: Object.keys(questions),
            now: 0,
            total: Object.keys(questions).length,
            choice: 0
        }
    }
    handleNextClick() {
        if(this.state.now === this.state.total) {
            this.setState({now: this.state.now+1});
        } else {
            questions[this.state.ids[this.state.now-1]].choice = this.state.choice;
            this.setState({choice: questions[this.state.ids[this.state.now]].choice, now: this.state.now+1});
        }
    }
    handleBackClick() {
        if(this.state.now === 1) {
            this.setState({now: this.state.now-1});
        } else {
            questions[this.state.ids[this.state.now-1]].choice = this.state.choice;
            this.setState({choice: questions[this.state.ids[this.state.now-2]].choice, now: this.state.now-1});
        }
    }
    render() {
        const q = this.state.now > 0 ? questions[this.state.ids[this.state.now-1]] : null;
        const show = this.state.now > 0 && this.state.now <= this.state.total ? (<>
            <Row style={{width: "100%"}}>
                <Col>
                    <Row style={{justifyContent: "center"}}><ProgressBar now={(this.state.now) * 100 / this.state.total}/></Row>
                    <Row style={{justifyContent: "center"}}><p>Question {this.state.now} of {this.state.total}</p></Row>
                </Col>
            </Row>
            <Row>
                <h2 style={{marginTop: "1.2em"}}>{q.message}</h2>
            </Row>
            <Row style={{width: "100%", marginTop:"1.2em"}}>
                <Col style={{padding: "0 8vw 0 16vw"}}>
                    <ul class='quiz-choice' style={{float: "right", margin: 0, minWidth: "16em"}}>
                        {[...Array(5).keys()].map(x =>
                            <Row>
                                <Col style={{padding: 0}}>
                                    <Button className={this.state.choice === (x+1) ? 'btn-primary' : 'btn-secondary'} onClick={()=>this.setState({choice: x+1})} style={{margin: "0.2em", minWidth: "13em"}}>
                                        <Row>
                                            <Col xs={2} style={{padding:0}}>{x+1}</Col>
                                            <Col xs={1} style={{padding:0}}>|</Col>
                                            <Col xs={8} style={{padding:0}}>{
                                                x===0 ? "Strongly disagree" : 
                                                x===1 ? "         disagree" :
                                                x===2 ? "         neutral" :
                                                x===3 ? "         agree" :
                                                x===4 ? "Strongly agree" :
                                            ""}</Col>
                                        </Row>
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </ul>
                </Col>
                <Col style={{padding: "0 16vw 0 8vw"}}>
                    <Row style={{flexDirection: "column", justifyContent: "center", height: "100%"}}>
                        <Button onClick={this.handleBackClick} variant="secondary" style={{margin: "0.2em"}}>Back</Button>
                        <Button onClick={this.handleNextClick} style={{margin: "0.2em"}}>Next Question</Button>
                    </Row>
                </Col>
            </Row>
        </>) : this.state.now <= 0 ? (<>
            <Row>   
                <h4 style={{margin: "3.2em"}}>Find out which UX Careers are right for you.</h4>
            </Row>
            <Row>
                <h1>Take the Quiz</h1>
            </Row>
            <Row>
                <Button onClick={() => this.setState({now: this.state.now+1})}>Start</Button>
            </Row>
        </>) : (<>
            <Row>   
                <h4 style={{margin: "3.2em"}}>Results!</h4>
            </Row>
        </>);
        return(
            <Container id='quiz'>
                {show}
            </Container>
        );
    }
}

export default Quiz;