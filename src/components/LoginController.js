import React, { Component } from 'react';

import LinkButton from './LinkButton';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleRegisterClick() {
        this.setState({isLoggedIn: true});
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