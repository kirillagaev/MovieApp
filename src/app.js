import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from './components/navbar/navbar'
import FindFilm from "./components/search/findFilm";
import LF from "./components/resultList/resultList";
import { enterMovieTitle, enterMovieYear, clearState, findFilm } from './actions/actions';


function App(props){
    const {show, query, filter, list, actions} = props;
    return (
            <div className="app">
                <Nav />
                <div className="home">
                    <FindFilm onSubmit={actions.findFilm} onChangeTitle={actions.enterMovieTitle} onChangeYear={actions.enterMovieYear} query={query} filter={filter}/>
                    {show ? <LF show={show}
                                value={query}
                                list={list}
                                onHide={actions.clearState}
                    /> :null}
                </div>
              </div>
    )
}

App.propTypes = {
    children: PropTypes.node
};

export const mapStateToProps = state => {
    return {
        list: state.list,
        show: state.show,
        query: state.query,
        filter: state.filter
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            enterMovieTitle,
            enterMovieYear,
            clearState,
            findFilm}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
