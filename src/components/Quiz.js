import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

import { jobs, questions } from './data/data';
import LinkButton from './LinkButton';

const deepcopy = (inObject) => {
    let outObject, value, key
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
      value = inObject[key]
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepcopy(value)
    }
    return outObject
}

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.newQuiz = this.newQuiz.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.calcTopJobs = this.calcTopJobs.bind(this);
        if(this.props.global.state.tempQuiz == null) {
            const q = deepcopy(questions);
            this.state = {
                ids: Object.keys(q),
                now: 0,
                total: Object.keys(q).length,
                choice: 0,
                questions: q,
                results: []
            }
            this.props.global.setState({ isQuizActive: true, tempQuiz: this.state });
        } else {
            this.state = this.props.global.state.tempQuiz;
            if (!this.props.global.state.isQuizActive) {
                console.log("Loading finished quiz...");
                this.state.now = this.props.global.state.tempQuiz.total+1;
            }
        }
    }
    handleNextClick() {
        if(this.state.now === this.state.total) {
            const q = this.state.questions[this.state.ids[this.state.now-1]];
            q.choice = this.state.choice;
            const results = this.calcTopJobs();
            console.log(this.state);
            this.setState({ now: this.state.now+1, questions: q, results: results });
            if(this.props.global.state.isQuizActive) {
                const history = this.props.global.state.quizHistory;
                const current = new Date();
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                const title = prompt("What would you like to title this quiz attempt?");
                history.unshift({
                    date: date,
                    title: title === "" ? "[User's Quiz Title]" : title,
                    quiz: {
                        questions: q,
                        ids: this.state.ids,
                        results: results
                    }
                });
                this.props.global.setState({ tempQuiz: { ...this.state, results: results }, quizHistory: history, isQuizActive: false });
            } else {
                this.props.global.setState({ tempQuiz: this.state })
            }
        } else {
            const q = this.state.questions;
            q[this.state.ids[this.state.now-1]].choice = this.state.choice;
            this.setState({choice: q[this.state.ids[this.state.now]].choice, now: this.state.now+1, questions: q });
            this.props.global.setState({ tempQuiz: this.state });
        }
        
    }
    handleBackClick() {
        if(this.state.now === 1) {
            this.setState({now: this.state.now-1});
        } else {
            const q = this.state.questions;
            q[this.state.ids[this.state.now-1]].choice = this.state.choice;
            this.setState({choice: q[this.state.ids[this.state.now-2]].choice, now: this.state.now-1, questions: q });
        }
        this.props.global.setState({ tempQuiz: this.state });
    }
    calcTopJobs() {
        const jobTotals = {};
        const keys = Object.keys(jobs);
        const q = this.state.questions;
        for(let i=0; i<keys.length; i++) {
            let total = 0;
            const weights = Object.keys(jobs[keys[i]].weights);
            for(let j=0; j<weights.length; j++) {
                total += jobs[keys[i]].weights[weights[j]] * (q[weights[j]].choice === 0 ? 0 : q[weights[j]].choice-3);
            }
            jobTotals[keys[i]] = total;
        }
        const max = [];
        const a = Object.keys(jobTotals);
        for(let i=0; i<a.length; i++) {
            let done = false;
            let j = 0;
            while(j < max.length && !done) {
                if(jobTotals[max[j]] < jobTotals[a[i]]) {
                    max.splice(j, 0, a[i]);
                    done = true;
                } else j++;
            }
            if(max.length > 3)
                max.pop();
            else if(max.length < 3 && !done)
                max.push(a[i]);
        }
        const results = max.map(key => jobs[key]);
        console.log(jobTotals, results);
        return results;
    }
    newQuiz() {
        console.log("Resetting quiz...");
        const q = deepcopy(questions);
        const newQuiz = {
            ids: Object.keys(q),
            now: 0,
            total: Object.keys(q).length,
            choice: 0,
            questions: q,
            results: []
        }
        this.setState(newQuiz);
        this.props.global.setState({ isQuizActive: true, tempQuiz: newQuiz });
    }
    handleCareerClicked(job) {
        this.props.global.setState({ tempJob: job });
    }
    render() {
        const q = this.state.now > 0 ? this.state.questions[this.state.ids[this.state.now-1]] : null;
        let results = this.state.results;
        const show = this.state.now > 0 && this.state.now <= this.state.total ? (<>
            <Row style={{width: "100%"}}>
                <Col>
                    <Row style={{justifyContent: "center", marginTop: "0.6em"}}><ProgressBar now={(this.state.now) * 100 / this.state.total}/></Row>
                    <Row style={{justifyContent: "center", marginTop: "0.6em"}}><p>Question {this.state.now} of {this.state.total}</p></Row>
                </Col>
            </Row>
            <Row>
                <h2 style={{marginTop: "1.2em"}}>{q.message}</h2>
            </Row>
            <Row style={{width: "100%", marginTop:"1.2em"}}>
                <Col style={{padding: "0 2vw 0 16vw"}}>
                    <ul className='quiz-choice' style={{margin: 0, minWidth: "16em", width: "100%"}}>
                        {[...Array(5).keys()].map(x =>
                            <Row style={{width: "100%"}}>
                                <Col style={{padding: 0}}>
                                    <Button className={this.state.choice === (x+1) ? 'btn-primary' : 'btn-secondary'} onClick={()=>this.setState({choice: x+1})} style={{margin: "0.2em", minWidth: "13em", width: "100%"}}>
                                        <Row>
                                            <Col xs={2} style={{padding:0}}><p style={{margin: 0, float: "right"}}>{x+1}</p></Col>
                                            <Col xs={2} style={{padding:0}}><p style={{margin: 0, float: "center"}}>|</p></Col>
                                            <Col xs={8} style={{padding:0}}><p style={{margin: 0, float: "center", paddingRight: "1.6em"}}>{
                                                x===0 ? "Strongly disagree" : 
                                                x===1 ? "         Disagree" :
                                                x===2 ? "         Neutral" :
                                                x===3 ? "         Agree" :
                                                x===4 ? "Strongly agree" :
                                            ""}</p></Col>
                                        </Row>
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </ul>
                </Col>
                <Col style={{padding: "0 12vw 0 2vw"}}>
                    <Row style={{flexDirection: "row", justifyContent: "center", height: "100%", padding: "2em 0 2.4em 0"}}>
                        <Col xs={4} style={{padding: 0}}>
                            <Row style={{height: "100%"}}>
                                <Button onClick={this.handleBackClick} variant="secondary" style={{margin: "0.2em", width: "90%", height: "100%"}}>Back</Button>
                            </Row>
                        </Col>
                        <Col xs={5} style={{padding: 0}}>
                            <Row style={{height: "100%"}}>
                                <Button onClick={this.handleNextClick} variant={this.state.choice === 0 ? "secondary" : "primary"} style={{margin: "0.2em", marginLeft: "2em", width: "90%", height: "100%"}}>{this.state.choice === 0 ? "Skip Question" : "Next Question"}</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>) : this.state.now <= 0 ? (<>
            <Row>
                <h4 style={{margin: "2.4em"}}>Find out which UX Careers are right for you.</h4>
            </Row>
            <Row>
                <h1 style={{fontSize: "3rem", margin: "0.6em"}}>Take the Quiz</h1>
            </Row>
            <Row>
                <Button onClick={() => this.setState({now: this.state.now+1})} style={{width: "16em", height: "3em"}}>Start</Button>
            </Row>
        </>) : (<>
            <Row>   
                <h3 style={{margin: "0.6em 0 1.2em 0"}}>Results</h3>
            </Row>
            {/*<Row style={{padding: 0, height: "12em", width: "32em"}}>
                <Col style={{padding: 0, height: "12em", width: "32em"}}>
                    <p>1. {results[0].title}</p>
                    <p>2. {results[1].title}</p>
                    <p>3. {results[2].title}</p>
                </Col>
            </Row>*/}
            <Row style={{width: "90%"}}>
                <CardDeck style={{width: "100%"}}>
                    {results.map((job, i) => (
                        <Card>
                            <Card.Header style={{fontWeight: "bold"}}>Match #{i+1}</Card.Header>
                            <Image fluid src={job.img} alt={job.title + ' icon'} style={{width: "14em", height: "13em", margin: "0.75em 0 0 5.25em"}} />
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Text>{job.bio}</Card.Text>
                            </Card.Body>
                            <LinkButton onClick={() => this.handleCareerClicked(job)} to={'/careers/' + job.title.toLowerCase().replace(' ', '-')} style={{height: "3em"}}>Read more</LinkButton>
                        </Card>
                    ))}
                </CardDeck>
            </Row>
            <Row style={{marginTop: "2em"}}>
                {this.props.global.state.isLoggedIn ? (
                    <Col style={{padding: 0}}><h5 style={{marginTop: "0.4em"}}>Your results have been saved!</h5></Col>
                ) : (<>
                    <Col xs={3} style={{padding: 0, marginLeft: "5.4em"}}><LinkButton to='/register' style={{float: "right", marginRight: "0.4em", alignText: "center"}}><h5>Sign up</h5></LinkButton></Col>
                    <Col style={{padding: 0, width: "360px"}}><h5 style={{marginTop: "0.4em"}}>to save your results!</h5></Col>
                </>)}
            </Row>
            {this.props.global.state.isLoggedIn? <></> : <Row><p style={{marginBottom: "0.4em"}}>or...</p></Row>}
            <Row>
                <Link to="/careers"><h5>Explore all careers</h5></Link>
            </Row>
            <Row style={{margin: "4em"}}>
                <h3>Take the quiz again:</h3>
                <Button style={{fontSize: "1.1rem", marginLeft: "0.4em", marginBottom: "3em"}} onClick={this.newQuiz}><h5>Restart</h5></Button>
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