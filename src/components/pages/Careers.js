import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
    handleJobClick(job) {
        this.setState({showSpecificCareer: true, job: job});
    }
    render() {
        const jList = Object.values(jobs);
        const showSpecificCareer = this.state.showSpecificCareer;
        const job = this.state.job;
        const show = showSpecificCareer ? (
        <Container id='specific-career' className='main'>
            <Row style={{height: "100%"}}>
                <Col xs={12} lg={2}>
                    <Button onClick={() => this.setState({showSpecificCareer: false, job: null})}>Go Back</Button>
                    <Button>Retake Quiz</Button>
                    <Button>My Pins</Button>
                </Col>
                <Col xs={12} lg={6}>
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
                <Col xs={12} lg={3} style={{marginLeft: "4em"}}>
                    <h4>Tasks</h4>
                        <ul>{job.tasks.map(item => <li>{item}</li>)}</ul>
                    <h4>Skills Needed</h4>
                        <ul>{job.skills.map(item => <li>{item}</li>)}</ul>
                    <h4>Average Salary</h4>
                        <p style={{fontSize: "1.1rem"}}>${job.salary} / year (median)</p>
                        <p className="hint"><a href="https://www.payscale.com/" target="_blank" rel="noreferrer">In Canada, 2021</a></p>
                </Col>
            </Row>
        </Container>
        ) : (
        <Container id='careers' className='main'>
            <Row>
                <CardDeck style={{padding: "0 8em"}}>
                    {jList.map((job) => (
                        <Card className="career-page-card" style={{minWidth: "20%", marginBottom: "2em", alignItems: "center"}}>
                            <Card.Img variant="top" src={job.img} style={{width: "12em", height: "11em", margin: "1.6em 0"}} />
                            <Button style={{borderRadius: "0 0 3px 3px", width: "100%"}} onClick={() => this.handleJobClick(job, this)}>{job.title}</Button>
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