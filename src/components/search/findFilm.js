import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindFilm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChangeTitle: PropTypes.func.isRequired,
        onChangeYear: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.handleSearchFilm = this.handleSearchFilm.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchFilm(e){
        const query = e.target.value;
        this.props.onChangeTitle(query);
    }

    handleFilter(e){
        const year = e.target.value;
        this.props.onChangeYear(year);
    }

    handleSubmit(){
        const query = this.props.query;
        const filter = this.props.filter;
        this.props.onSubmit(query, filter);
    }

    render(){
        return(
            <div className = "find-film">
                <textarea
                    value={this.props.query}
                    onChange={this.handleSearchFilm}
                    placeholder="Введите название фильма"
                    maxLength="80"
                />
                <div className="controls">
                    <input type="number" placeholder="год"
                           onChange={this.handleFilter}
                           value={this.props.filter}
                           max="4"
                           />
                    <button
                        disabled={!this.props.query.length}
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