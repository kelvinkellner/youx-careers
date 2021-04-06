import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class MyProfile extends Component {
    render() {
        const problemAlert = () => { alert("Sorry, this feature does not exist yet!"); }
        return(
            <Container id='my-profile' className='main'>
                <Row>
                    <h2>Hello, [Name]!</h2>
                </Row>
                <Row style={{width: "80%", marginTop: "2em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Pinned Careers</h4>
                        <Row className='pinned-section'>
                            <Col xs={2}>
                                <p>[UX Career Title]</p>
                            </Col>
                            <Col fluid />
                            <Col xs={2}>
                                <Button onClick={problemAlert}>Unpin</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: "0.2em", width: "80%"}}>
                    <Col style={{padding: 0}}>
                        <Row className='pinned-section'>
                            <Col xs={2}>
                                <p>[UX Career Title]</p>
                            </Col>
                            <Col fluid />
                            <Col xs={2}>
                                <Button onClick={problemAlert}>Unpin</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{width: "80%", marginTop: "3em"}}>
                    <Col style={{padding: 0}}>
                        <h4>Past Quiz Results</h4>
                        <Row className='pinned-section'>
                            <Col xs={2}>
                                <p>01/01/2021</p>
                            </Col>
                            <Col xs={3}>
                                <p>[Quiz Results Title]</p>
                            </Col>
                            <Col fluid />
                            <Col xs={2}>
                                <Button onClick={problemAlert}>View Results</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: "0.2em", width: "80%"}}>
                    <Col style={{padding: 0}}>
                        <Row className='pinned-section'>
                            <Col xs={2}>
                                <p>01/01/2021</p>
                            </Col>
                            <Col xs={3}>
                                <p>[Quiz Results Title]</p>
                            </Col>
                            <Col fluid />
                            <Col xs={2}>
                                <Button onClick={problemAlert}>View Results</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <p style={{marginTop: "3em"}}>Please note: this page would normally fill will user's information, although no database has been setup for this prototype.</p>
                </Row>
            </Container>
        );
    };
}

export default MyProfile;