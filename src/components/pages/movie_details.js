import React, { Component } from 'react';
import Nav from "../navbar/navbar";
import { Media, Container, Row, Col, Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { movieDetails, isLoading } from "../../actions/actions";

class MoreDetails extends Component{

    componentDidMount(){
        this.props.actions.movieDetails(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.actions.isLoading();
    }

    render(){
        const {poster_path, title, release_date, overview, original_title, budget, status, revenue, runtime} = this.props.details;
        return(
            <div className="app">
                <Nav />
                {this.props.isLoading ? <Spinner animation="border" variant="primary"/> :
                    <div className="page_movie">
                        <Media>
                            <img
                                width={300}
                                height={450}
                                className="poster"
                                src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + `${poster_path}`}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <div className="title">
                                <span>
                                    <h2 className="movieTitle">{title}</h2>
                                    <span> ({release_date})
                                    </span>
                                </span>
                                </div>
                                <div className="header_info">
                                    <h3>Обзор</h3>
                                    <div className="overview">
                                        <p>
                                            {overview}
                                        </p>
                                    </div>
                                </div>
                                <div className="fact">
                                    <h3>Факты</h3>
                                    <Container>
                                        <Row>
                                            <Col><p><strong>Исходное название:</strong>
                                            </p> {original_title}</Col>
                                            <Col><p><strong>Бюджет:</strong></p> ${budget}</Col>
                                            <Col><p><strong>Статус:</strong></p> {status}</Col>
                                            <Col><p><strong>Доход:</strong></p> ${revenue}</Col>
                                            <Col><p><strong>Продолжительность:</strong>
                                            </p> {runtime} мин.</Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Media.Body>
                        </Media>
                    </div>
                }
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return {
        details: state.details,
        isLoading: state.isLoading
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            movieDetails,
            isLoading
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetails);