import './assets/css/fonts.css';
import './assets/css/index.scss';
import './assets/css/App.css';

import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AppContextProvider } from './components/Store';
import Header from './components/Header';
import Footer from './components/Footer';

import Careers from './components/pages/Careers';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MyProfile from './components/pages/MyProfile';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div id="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/careers" component={Careers} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-profile" component={MyProfile} />
          <Footer />
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
