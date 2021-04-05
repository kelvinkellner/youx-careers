import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { jobs } from '../data/data';

class Careers extends Component {
    render() {
        const jList = Object.values(jobs);
        return (
            <Container id='careers' className='main'>
                <Row>
                    <CardDeck style={{padding: "0 8em"}}>
                        {jList.map((job, i) => (
                            <Card className="career-page-card" style={{minWidth: "20%", marginBottom: "2em", alignItems: "center"}}>
                                <Card.Img variant="top" src={job.img} style={{width: "60%", margin: "1.6em 0"}} />
                                <Button style={{borderRadius: "0 0 3px 3px", width: "100%"}}>{job.title}</Button>
                            </Card>
                        ))}
                    </CardDeck>
                </Row>
            </Container>
        );
    }
}

export default Careers;