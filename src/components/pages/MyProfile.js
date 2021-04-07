import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { jobs } from '../data/data';
import LinkButton from '../LinkButton';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.handleUnpin = this.handleUnpin.bind(this);
    }
    handleUnpin(key) {
        const pins = this.props.global.state.pins;
        if(key in pins) {
            delete pins[key];
            this.props.global.setState({ pins: pins });
        }
    }
    handleViewResults(quiz) {
        this.props.global.setState({ isQuizActive: false, tempQuiz: quiz });
    }
    handleCareerClicked(job) {
        this.props.global.setState({ tempJob: job });
    }
    render() {
        const pins = this.props.global.state.pins;
        const quizHistory = this.props.global.state.quizHistory;
        return(
            <Container id='my-profile' className='main' style={{paddingLeft: "2em", paddingTop: "2em"}}>
                <Row>
                    <h2>Hello, {this.props.global.state.isLoggedIn ? this.props.global.state.user.email : "Guest"}!</h2>
                </Row>
                <Row style={{width: "80%", marginTop: "2em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Pinned Careers</h4>
                        {Object.keys(pins).length > 0 ? (
                            Object.keys(pins).map(key => 
                                <Row className='pinned-section' style={{marginBottom: "0.2em"}}>
                                    <Col xs={2}>
                                        <p>{pins[key].title}</p>
                                    </Col>
                                    <Col fluid />
                                    <Col xs={1} style={{padding: 0, margin: "0 0.4em"}}>
                                        <Button variant="link" onClick={() => this.handleUnpin(key)}>Unpin</Button>
                                    </Col>
                                    <Col xs={2} style={{padding: 0, margin: "0 0.4em"}}>
                                        <LinkButton onClick={() => this.handleCareerClicked(jobs[key])} to={'/careers/' + pins[key].title.toLowerCase().replace(' ', '-')}>View Career</LinkButton>
                                    </Col>
                                </Row>
                                )
                        ) : (
                            <Row className='pinned-section'>
                                <Col xs={12}>
                                    <p>No pinned careers. You should pin one!</p>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
                <Row style={{width: "80%", marginTop: "3em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Past Quiz Results</h4>
                            { quizHistory.length > 0 ? (
                                quizHistory.map(quiz => (
                                    <Row className='pinned-section' style={{marginBottom: "0.2em"}}>
                                        <Col xs={2}>
                                            <p>{quiz.date}</p>
                                        </Col>
                                        <Col xs={3}>
                                            <p>{quiz.title}</p>
                                        </Col>
                                        <Col fluid />
                                        <Col xs={2} style={{padding: 0, margin: "0 0.4em"}}>
                                            <LinkButton to="/" onClick={() => this.handleViewResults(quiz.quiz)}>View Results</LinkButton>
                                        </Col>
                                    </Row>
                                ))
                            ) : (
                                <Row className='pinned-section'>
                                    <Col xs={12}>
                                        <p>No past quiz results. Take the quiz!</p>
                                    </Col>
                                </Row>
                            ) }
                    </Col>
                </Row>
                <Row>
                    <p style={{marginTop: "3em"}}>Please note: this prototype does not use a database, all information is stored temporarily and will be lost after refreshing.</p>
                </Row>
            </Container>
        );
    };
}

export default MyProfile;