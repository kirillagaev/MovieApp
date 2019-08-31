import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindFilm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state ={
            query: '',
            filter: ''
        };
        this.handleSearchFilm = this.handleSearchFilm.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchFilm(e){
        const query = e.target.value;
        this.setState(()=>({
            query
        }))
    }

    handleFilter(e){
        const filter = e.target.value;
        this.setState(()=>({
            filter
        }))
    }

    handleSubmit(){
        const query = this.state.query;
        const filter = this.state.filter;
        this.props.onSubmit(query, filter);
        this.setState(()=>({
            query: '',
            filter: ''
        }))
    }

    render(){
        return(
            <div className = "find-film">
                <textarea
                    value={this.state.query}
                    onChange={this.handleSearchFilm}
                    placeholder="Введите название фильма"
                    maxLength="80"
                />
                <div className="controls">
                    <input type="number" placeholder="год"
                           onChange={this.handleFilter}
                           value={this.state.filter}
                           max="4"
                           />
                    <button
                        disabled={!this.state.query.length}
                        onClick={this.handleSubmit}
                    >
                        Найти
                    </button>
                </div>
            </div>
        )
    }
}

export default FindFilm;