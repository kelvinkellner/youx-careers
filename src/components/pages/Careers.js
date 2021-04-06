import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { jobs } from '../data/data';

class Careers extends Component {
    constructor(props) {
        super(props);
        this.handleJobClick = this.handleJobClick.bind(this);
        this.state = {
            showSpecificCareer: false,
            job: null
        }
    }
    handleJobClick(job, key) {
        this.setState({showSpecificCareer: true, job: job});
        this.props.global.setState({ tempJob: job, tempKey: key });
    }
    handlePinPressed(job, key) {
        if(this.props.global.state.isLoggedIn) {
            const pins = this.props.global.state.pins;
            if(!(key in pins)) {
                pins[key] = job;
                this.props.global.setState({ pins: pins });
                alert(job.title + ' successfully pinned!');
            } else {
                alert("Already pinned!");
            }
        } else {
            alert("Please log in or sign up to save pins!");
        }
    }
    render() {
        const kList = Object.keys(jobs);
        const showSpecificCareer = this.state.showSpecificCareer;
        const job = this.state.job;
        const key = this.props.global.state.tempKey;
        const show = showSpecificCareer ? (
        <Container id='specific-career' className='main'>
            <Row style={{height: "100%"}}>
                <Col xs={12} lg={2} style={{paddingTop: "0.8em"}}>
                    <Button variant="secondary" onClick={() => this.setState({showSpecificCareer: false, job: null})} style={{width: "100%"}}>Go Back</Button>
                    <Button as={Link} to="/" variant="secondary" style={{width: "100%", marginTop: "1.2em"}}>Retake Quiz</Button>
                    <Button as={Link} to="/my-profile" variant="secondary" style={{width: "100%", marginTop: "1.2em"}}>My Pins</Button>
                    <Button style={{width: "100%", height: "4em", marginTop: "1.2em"}} onClick={() => this.handlePinPressed(job, key) }>Pin to Profile</Button>
                </Col>
                <Col xs={12} lg={6} style={{marginLeft: "1em"}}>
                    <h1>{job.title}</h1>
                        <p>{job.bio}</p>
                        <ul>{job.bullets.map(item => <li>{item}</li>)}</ul>
                    <h3>Responsibilities</h3>
                        <ul>{job.responsibilities.map(item => <li>{item}</li>)}</ul>
                    <h3>Requirements</h3>
                        <ul>{job.requirements.map(item => <li>{item}</li>)}</ul>
                    <h4 style={{marginTop: "1.6em"}}>You will enjoy being a {job.title} if you...</h4>
                        <ol>{job.willenjoyif.map(item => <li>{item}</li>)}</ol>
                </Col>
                <Col xs={12} lg={3} style={{marginLeft: "3em"}}>
                    <Image fluid src={job.img} alt={job.title + ' icon'} style={{width: "14em", height: "13.2em", margin: "0 0 0.6em 3.6em"}} />
                    <h4>Tasks</h4>
                        <ul>{job.tasks.map(item => <li>{item}</li>)}</ul>
                    <h4>Skills Needed</h4>
                        <ul>{job.skills.map(item => <li>{item}</li>)}</ul>
                    <h4>Average Salary</h4>
                        <p style={{fontSize: "1.1rem", marginBottom: "-0.2em"}}>${job.salary} / year (median)</p>
                        <p className="hint"><a href="https://www.payscale.com/" target="_blank" rel="noreferrer">2021 in Canada, via PayScale.</a></p>
                </Col>
            </Row>
        </Container>
        ) : (
        <Container id='careers' className='main'>
            <Row>
                <CardDeck style={{padding: "0 8em"}}>
                    {kList.map((key) => (
                        <Card className="career-page-card" style={{minWidth: "20%", marginBottom: "2em", alignItems: "center"}}>
                            <Card.Img variant="top" src={jobs[key].img} style={{width: "12em", height: "11em", margin: "1.6em 0"}} />
                            <Button style={{borderRadius: "0 0 3px 3px", width: "100%"}} onClick={() => this.handleJobClick(jobs[key], key)}>{jobs[key].title}</Button>
                        </Card>
                    ))}
                </CardDeck>
            </Row>
        </Container>
        );
        return (
            <>{show}</>
        );
    }
}

export default Careers;