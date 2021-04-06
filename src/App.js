import './assets/css/fonts.css';
import './assets/css/index.scss';
import './assets/css/App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Careers from './components/pages/Careers';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MyProfile from './components/pages/MyProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
      isQuizActive: false,
      tempJob: null, tempKey: null, tempQuiz: null,
      quizHistory: [],
      pins: {},
      userDB: {}
    }
  }
  render() {
    return (
      <Router>
        <div id="app">
          <Header global={this} />
          <Route exact path="/" component={Home} />
          <Route path="/careers"><Careers global={this}/></Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-profile"><MyProfile global={this}/></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
