import './assets/css/fonts.css';
import './assets/css/index.scss';
import './assets/css/App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Careers from './components/pages/Careers';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/careers" component={Careers} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
