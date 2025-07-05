import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Home from './Home.jsx';
import Achievements from './components/achievements.jsx';





ReactDOM.render(
    <React.Fragment>
        <ThemeProvider>
         <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/achievements" component={Achievements} />
        </Switch>
      </Router>
        </ThemeProvider>
    </React.Fragment>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
