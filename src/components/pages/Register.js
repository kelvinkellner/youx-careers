import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import LinkButton from '../LinkButton';

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
            alert("Sorry, account already exists.");
        } else if(email === '' || password === '') {
            alert("Please enter a valid email and password.");
        } else {
            const user = { email: email, password: password, quizHistory: [], pins: {} };
            this.props.global.setState({ isLoggedIn: true, user: user });
            const userDB = this.props.global.state.userDB;
            userDB[email] = user;
            this.props.global.setState({ userDB: userDB });
            alert("You have signed up successfully!");
        }
    }
    render() {
        const isLoggedIn = this.props.global.state.isLoggedIn;
        const show = !isLoggedIn ? (
            <Container id='register' className='main' style={{minHeight: "30.8em"}}>
                <Row style={{marginTop: "5em", marginBottom: "1em"}}>
                    <h2>Sign Up</h2>
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
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
            ) : (
            <Container id='register' className='main' style={{minHeight: "23.8em"}}>
                <Row style={{margin: "12em 0 2em 0"}}>
                    <h1>You are already signed in!</h1>
                </Row>
                <Row>
                    <LinkButton to='/my-profile'>My Profile</LinkButton>
                </Row>
            </Container>);
        return (<>
            {show}
        </>);
    }
}

export default Login;