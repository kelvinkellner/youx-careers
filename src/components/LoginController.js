import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import LinkButton from './LinkButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleLogoutClick() {
        const user = {
            ...this.props.global.state.user,
            quizHistory: this.props.global.state.quizHistory,
            pins: this.props.global.state.pins
        }
        const userDB = this.props.global.state.userDB;
        userDB[user.email] = user;
        this.props.global.setState({ isLoggedIn: false, user: null, quizHistory: [], pins: {}, userDB: userDB });
    }
    handleLoginClick() {
        const email = prompt("Email");
        const password = prompt("Password");
        if(email in this.props.global.state.userDB) {
            if(this.props.global.state.userDB[email].password === password) {
                const user = this.props.global.state.userDB[email];
                this.props.global.setState({ isLoggedIn: true, user: user, pins: user.pins, quizHistory: user.quizHistory });
                alert('You have logged in successfully!');
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("Sorry, account not found.");
        }
    }
    handleRegisterClick() {
        const email = prompt("Email");
        const password = prompt("Password");
        const user = { email: email, password: password, quizHistory: [], pins: {} };
        this.props.global.setState({ isLoggedIn: true, user: user });
        if(email in this.props.global.state.userDB) {
            alert("Sorry, account already exists.");
        } else {
            const userDB = this.props.global.state.userDB;
            userDB[email] = user;
            this.props.global.setState({ userDB: userDB });
            alert("You have signed up successfully!");
        }
    }

    render() {
        const isLoggedIn = this.props.global.state.isLoggedIn;
        let show;
        if(isLoggedIn) {
            show = <>
                <LinkButton to='/my-profile' className='btn-header'>My Profile</LinkButton>
                <Button onClick={this.handleLogoutClick} variant="secondary" className='btn-header'>Log Out</Button>
                </>
        } else {
            show = <>
                <Button onClick={this.handleLoginClick} variant="secondary" className='btn-header'>Log In</Button>
                <Button onClick={this.handleRegisterClick} className='btn-header'>Sign Up</Button>
                </>
        }
        return(
            <>
            {show}
            </>
        );
    }
}

export default LoginController;