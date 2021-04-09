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
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true
        }
    }
    handleChange = e => {
        const key = e.target.id;
        if(key === 'password' || key === 'confirmPassword') {
            if((key === 'confirmPassword' && (e.target.value !== '' && this.state.password !== '')) || (key === 'password' && this.state.confirmPassword !== '')) {
                let password = e.target.value;
                let confirmPassword = e.target.value;
                if(key === 'password')
                    confirmPassword = this.state.confirmPassword;
                else
                    password = this.state.password;
                if(password === confirmPassword)
                    this.setState({ passwordMatch: true, [key]: e.target.value });
                else
                    this.setState({ passwordMatch: false, [key]: e.target.value });
            } else
                this.setState({ passwordMatch: true, [key]: e.target.value });
        } else
            this.setState({ [key]: e.target.value });
    };
    handleClick(e) {
        e.preventDefault();
        const displayName = this.state.displayName;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if(email in this.props.global.state.userDB) {
            alert("Sorry, account already exists.");
        } else if(displayName === '' || email === '' || password === '' || confirmPassword === '' || password !== confirmPassword) {
            alert("Please check that all inputs are complete and correct.");
        } else {
            const user = { displayName: displayName, email: email, password: password, quizHistory: this.props.global.state.quizHistory, pins: {} };
            this.props.global.setState({ isLoggedIn: true, user: user });
            const userDB = this.props.global.state.userDB;
            userDB[email] = user;
            this.props.global.setState({ userDB: userDB });
        }
    }
    render() {
        const isLoggedIn = this.props.global.state.isLoggedIn;
        const show = !isLoggedIn ? (
            <Container id='register' className='main' style={{minHeight: "72.2vh"}}>
                <Row style={{marginTop: "2em", marginBottom: "1em"}}>
                    <h2>Sign Up</h2>
                </Row>
                <Row>
                    <Form>
                        <Form.Group controlId="displayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} className={this.state.passwordMatch ? "" : "password-no-match"} />
                            {this.state.passwordMatch ? <></> : <Form.Text>Passwords entered do not match.</Form.Text>}
                        </Form.Group>
                        <Form.Text className="text-muted">
                        Note: This prototype does not store any information, refreshing will reset all data.
                        </Form.Text>
                        <Button variant="primary" type="submit" style={{width: "18.4em", margin: "1em 0 -5em 5em"}} onClick={(e) => this.handleClick(e)}>
                            Sign Up
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