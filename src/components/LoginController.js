import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import LinkButton from './LinkButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
                <LinkButton to='/my-profile' className='btn-header' onClick={() => this.props.global.setState({ tempJob: null })}>My Profile</LinkButton>
                <Button onClick={this.handleLogoutClick} variant="secondary" className='btn-header' onClick={() => this.props.global.setState({ tempJob: null })}>Log Out</Button>
                </>
        } else {
            show = <>
                <LinkButton to='/login' variant="secondary" className='btn-header'>Log In</LinkButton>
                <LinkButton to='/register' className='btn-header'>Sign Up</LinkButton>
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