import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Pencil } from 'react-bootstrap-icons';

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
        const user = this.props.global.state.user;
        if(key in user.pins) {
            delete user.pins[key];
            this.props.global.setState({ user: user });
        }
    }
    handleViewResults(quiz) {
        this.props.global.setState({ isQuizActive: false, tempQuiz: quiz });
    }
    handleCareerClicked(job) {
        this.props.global.setState({ tempJob: job });
    }
    handleEditName(i) {
        const quizHistory = this.props.global.state.quizHistory;
        const newTitle = prompt("Enter a new title for this quiz record:");
        if(newTitle !== null && newTitle !== '') {
            quizHistory[i].title = newTitle;
            this.props.global.setState({ quizHistory: quizHistory });
        }
    }
    render() {
        const pins = this.props.global.state.isLoggedIn ? this.props.global.state.user.pins : {};
        const quizHistory = this.props.global.state.quizHistory;
        const show = this.props.global.state.isLoggedIn ? (
            <Container id='my-profile' className='main' style={{paddingLeft: "2em", paddingTop: "2em"}}>
                <Row>
                    <h2>Hello, {this.props.global.state.isLoggedIn ? this.props.global.state.user.displayName? this.props.global.state.user.displayName : this.props.global.state.user.email : "Guest"}!</h2>
                </Row>
                <Row style={{width: "80%", marginTop: "2em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Pinned Careers</h4>
                        {Object.keys(pins).length > 0 ? (
                            Object.keys(pins).map((key, i) => 
                                <Row className='pinned-section' style={{marginBottom: "0.2em"}} key={"pinned-career-"+(i+1)}>
                                    <Col xs={2}>
                                        <p>{pins[key].title}</p>
                                    </Col>
                                    <Col fluid />
                                    <Col xs={1} style={{padding: 0, margin: "0 0.4em"}}>
                                        <Button variant="link" onClick={() => this.handleUnpin(key)}>Unpin</Button>
                                    </Col>
                                    <Col xs={2} style={{padding: 0, margin: "0 0.4em"}}>
                                        <LinkButton to={'/careers/' + pins[key].title.toLowerCase().replace(' ', '-')} onClick={() => this.handleCareerClicked(jobs[key])}>View Career</LinkButton>
                                    </Col>
                                </Row>
                                )
                        ) : (
                            <Row className='pinned-section'>
                                <Col xs={12}>
                                    <p>No pinned careers.</p>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
                <Row style={{width: "80%", marginTop: "3em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Past Quiz Results</h4>
                            { quizHistory.length > 0 ? (
                                quizHistory.map((quiz, i) => (
                                    <Row className='pinned-section' style={{marginBottom: "0.2em"}} key={"past-quiz-"+(i+1)}>
                                        <Col xs={2}>
                                            <p>{quiz.date}</p>
                                        </Col>
                                        <Col xs={3}>
                                            <Button onClick={() => this.handleEditName(i)} className='edit-text'>
                                                <p>{quiz.title}</p>
                                                <Pencil className='icon' size={12}/>
                                            </Button>
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
                                        <p>No past quiz results.</p>
                                    </Col>
                                </Row>
                            ) }
                    </Col>
                </Row>
                <Row>
                    <p style={{marginTop: "3em"}}>Please note: this prototype does not use a database, all information is stored temporarily and will be lost after refreshing.</p>
                </Row>
            </Container>
        ) : <Redirect to="/"/>;
        return(<>
            {show}
        </>);
    };
}

export default withRouter(MyProfile);