import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import LinkButton from './LinkButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick() {
        const user = {
            ...this.props.global.state.user,
            quizHistory: this.props.global.state.quizHistory
        }
        const userDB = this.props.global.state.userDB;
        userDB[user.email] = user;
        this.props.global.setState({ isLoggedIn: false, user: null, quizHistory: [], userDB: userDB });
    }
    render() {
        const isLoggedIn = this.props.global.state.isLoggedIn;
        let show;
        if(isLoggedIn) {
            show = <>
                <LinkButton to='/my-profile' className='btn-header' onClick={() => this.props.global.setState({ tempJob: null })}>My Profile</LinkButton>
                <Button onClick={this.handleLogoutClick} variant="secondary" className='btn-header'>Log Out</Button>
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