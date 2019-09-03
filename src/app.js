import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from './components/navbar/navbar'
import FindFilm from "./components/search/findFilm";
import LF from "./components/resultList/resultList";
import * as API from './http/fetch';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            show: false,
            query: ''
        };
        this.findFilm = this.findFilm.bind(this);
        this.setShow = this.setShow.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    static propTypes = {
        children: PropTypes.node
    };

    findFilm(query, filter) {
        API.fetchMovie(query, filter).then(res => {
            return res.json().then(res =>
                this.setState(()=>({
                list: res.results,
                show: true,
                query
                })))
        }).catch(()=> console.log("Ошибочка вышла!"));
    }
    setShow(){
        this.setState(()=>({
            show: false
        }))
    }
    clearState(){
        this.setState(()=>({
            list: [],
            query: ''
        }))
    }

    render() {
        return (
            <div className="app">
                <Nav />
                <div className="home">
                    <FindFilm onSubmit={this.findFilm}/>
                    {/*TODO: Уйти от создания функция в рендере */}
                    {this.state.show ? <LF show={this.state.show} value={this.state.query} list={this.state.list} onHide={this.setShow} clear={this.clearState}/>:null}
                </div>
              </div>
        )
    }
}

export default App;