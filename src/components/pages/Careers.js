import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { jobs } from '../data/data';
import LinkButton from '../LinkButton';

class Careers extends Component {
    constructor(props) {
        super(props);
        this.handleJobClick = this.handleJobClick.bind(this);
    }
    handleJobClick(job, key) {
        this.props.global.setState({ tempJob: job, tempKey: key });
    }
    handlePinPressed(job, key) {
        if(this.props.global.state.isLoggedIn) {
            const pins = this.props.global.state.user.pins;
            if(!(key in pins)) {
                pins[key] = { title: job.title };
            } else {
                delete pins[key];
            }
            this.props.global.setState({ pins: pins });
        } else {
            alert("Please log in or sign up to save pins!");
        }
    }
    refreshCareerSelected() {
        const job = this.props.global.state.tempJob;
        const kList = Object.keys(jobs);
        if(window.location.pathname === '/careers' && job !== null) {
            this.props.global.setState({ tempJob: null, tempKey: null });
        } else if(window.location.pathname !== '/careers' && job === null) {
            const url = window.location.pathname.replace('/careers/', '').replace('+', ' ').replace('-', ' ');
            let found = false, i=0;
            while(!found && i<kList.length) {
                if (jobs[kList[i]].title.toLowerCase() === url) {
                    this.props.global.setState({ tempJob: jobs[kList[i]], tempKey: i });
                    found = true;
                } else
                    i++;
            }
        }
    }
    componentWillUnmount() {
        this.refreshCareerSelected();
    }
    render() {
        const job = this.props.global.state.tempJob;
        const kList = Object.keys(jobs);
        this.refreshCareerSelected(kList, job);
        const showSpecificCareer = this.props.global.state.tempJob === null ? false : true;
        const key = this.props.global.state.tempKey;
        const pins = this.props.global.state.isLoggedIn ? this.props.global.state.user.pins : {};
        const show = showSpecificCareer ? (
        <Container id='specific-career' className='main' style={{marginBottom: 0}}>
            <Row>
                <Col xs={12} lg={2} style={{paddingTop: "0.8em", maxHeight: "72vh"}}>
                    <div style={{position: "sticky", top: "6.8em"}}>
                        <LinkButton to='/careers' variant="secondary" onClick={() => { this.setState({showSpecificCareer: false, job: null}); this.props.global.setState({ tempJob: null });}} style={{width: "100%"}}>All Careers</LinkButton>
                        <Button as={Link} to="/" variant="secondary" style={{width: "100%", marginTop: "1.2em"}}>Retake Quiz</Button>
                        <Button as={Link} to="/my-profile" variant="secondary" style={{width: "100%", marginTop: "1.2em"}}>My Pins</Button>
                        <Button style={{width: "100%", height: "3.2em", marginTop: "1.2em"}} onClick={() => this.handlePinPressed(job, key) }>{key in pins ? "Unpin Career" : "Pin to Profile"}</Button>
                    </div>
                </Col>
                <Col className="v-scroll" xs={12} lg={6} style={{marginLeft: "1em", overflowY: "scroll", maxHeight: "76vh"}}>
                    <h1>{job.title}</h1>
                        <p>{job.bio}</p>
                        {job.bullets ? (<ul>{job.bullets.map((item,i) => <li key={"job-"+(i+1)+"-bullets"}>{item}</li>)}</ul>) : (<></>)}
                    <h3>Responsibilities</h3>
                        <ul>{job.responsibilities.map((item,i) => <li key={"job-"+(i+1)+"-responsibilites"}>{item}</li>)}</ul>
                    <h3>Requirements</h3>
                        <ul>{job.requirements.map((item,i) => <li key={"job-"+(i+1)+"-requirements"}>{item}</li>)}</ul>
                    <h4 style={{marginTop: "1.6em"}}>You will enjoy being a {job.title} if you...</h4>
                        <ol>{job.willenjoyif.map((item,i) => <li key={"job-"+(i+1)+"-will-enjoy-if"}>{item}</li>)}</ol>
                </Col>
                <Col className="v-scroll" xs={12} lg={3} style={{marginLeft: "3em", overflowY: "scroll", maxHeight: "76vh"}}>
                    <Image fluid src={job.img} alt={job.title + ' icon'} style={{width: "14em", height: "13.2em", margin: "0 0 0.6em 3.6em"}} />
                    <h4>Tasks</h4>
                        <ul>{job.tasks.map((item,i) => <li key={"job-"+(i+1)+"-tasks"}>{item}</li>)}</ul>
                    <h4>Skills Needed</h4>
                        <ul>{job.skills.map((item,i) => <li key={"job-"+(i+1)+"-skills"}>{item}</li>)}</ul>
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
                        <Card className="career-page-card" style={{minWidth: "20%", marginBottom: "2em", alignItems: "center"}} key={'career-select-'+jobs[key].title.toLowerCase().replace(' ', '-')}>
                            <Card.Img variant="top" src={jobs[key].img} style={{width: "12em", height: "11em", margin: "1.6em 0"}} />
                            <LinkButton to={'/careers/' + jobs[key].title.toLowerCase().replace(' ', '-')} style={{borderRadius: "0 0 3px 3px", width: "100%"}} onClick={() => this.handleJobClick(jobs[key], key)}>{jobs[key].title}</LinkButton>
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

export default withRouter(Careers);