import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";

import App from './app';
import MoreDetails from './components/pages/movie_details';

import "../static/styles.css"

render(
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/movie/:id" component={MoreDetails}/>
    </Router>,document.getElementById('root'));