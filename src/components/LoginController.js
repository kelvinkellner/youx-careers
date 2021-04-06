import React, { Component } from 'react';

import LinkButton from './LinkButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.state = {
            isLoggedIn: false,
            email: null,
            password: null
        };
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false, email: null, password: null });
    }
    handleLoginClick() {
        const email = prompt("Email");
        const password = prompt("Password");
        this.setState({ isLoggedIn: true, email: email, password: password });
    }
    handleRegisterClick() {
        const email = prompt("Email");
        const password = prompt("Password");
        this.setState({ isLoggedIn: true, email: email, password: password });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let show;
        if(isLoggedIn) {
            show = <>
                <LinkButton to='/my-profile' className='btn-header'>My Profile</LinkButton>
                <LinkButton exact to='/' onClick={this.handleLogoutClick} variant="secondary" className='btn-header'>Log Out</LinkButton>
                </>
        } else {
            show = <>
                <LinkButton exact to='/' onClick={this.handleLoginClick} variant="secondary" className='btn-header'>Log In</LinkButton>
                <LinkButton exact to='/' onClick={this.handleRegisterClick} className='btn-header'>Sign Up</LinkButton>
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