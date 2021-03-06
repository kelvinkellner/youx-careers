import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.type]: e.target.value });
    };
    handleClick(e) {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        if(email in this.props.global.state.userDB) {
            if(this.props.global.state.userDB[email].password === password) {
                const user = this.props.global.state.userDB[email];
                const history = this.props.global.state.quizHistory.concat(user.quizHistory);
                this.props.global.setState({ isLoggedIn: true, user: user, quizHistory: history });
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("Sorry, account not found.");
        }
    }
    render() {
        const isLoggedIn = this.props.global.state.isLoggedIn;
        const show = !isLoggedIn ? (
            <Container id='login' className='main' style={{minHeight: "65.8vh"}}>
                <Row style={{marginTop: "5em", marginBottom: "1em"}}>
                    <h2>Log In</h2>
                </Row>
                <Row>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Text className="text-muted">
                        Note: This prototype does not store any information, refreshing will reset all data.
                        </Form.Text>
                        <Button variant="primary" type="submit" style={{width: "18.4em", margin: "1em 0 -5em 5em"}} onClick={(e) => this.handleClick(e)}>
                            Log In
                        </Button>
                    </Form>
                </Row>
            </Container>
        ) : <Redirect to="/my-profile"/>;
        return (<>
           {show} 
        </>);
    }
}

export default Login;