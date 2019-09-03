import React, { Component } from 'react';
import * as API from '../../http/fetch';
import Nav from "../navbar/navbar";
import { Media, Container, Row, Col, Spinner} from 'react-bootstrap';

class MoreDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            details: {}
        }
    }

    componentDidMount(){
        API.fetchMovieDetails(this.props.match.params.id).then(res=>{
            return res.json().then(res=>
                this.setState(()=>({
                    details: res,
                    isLoading: false
                }))
            )
        }).catch(()=>console.log("Ошибочка вышла!"))
    }

    render(){
        const {poster_path, title, release_date, overview, original_title, budget, status, revenue, runtime} = this.state.details;
        return(
            <div className="app">
                <Nav />
                {this.state.isLoading ? <Spinner animation="border" variant="primary"/> :
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

export default MoreDetails;