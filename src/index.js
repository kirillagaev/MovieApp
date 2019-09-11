import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';

import App from './app';
import MoreDetails from './components/pages/movie_details';
import store from './store/store';

import "../static/styles.css"

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App}/>
            <Route path="/movie/:id" component={MoreDetails}/>
        </Router>
    </Provider>,document.getElementById('root'));
