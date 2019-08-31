import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import App from './app';
import Details from './components/pages/movie_details';

import "../static/styles.css"

render(
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/movie/:id" component={Details}/>
    </Router>,document.getElementById('root'));