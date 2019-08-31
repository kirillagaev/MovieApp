import React, { Component } from 'react';
import * as API from '../../http/fetch';
import Nav from "../navbar/navbar";
import { Media, Container, Row, Col} from 'react-bootstrap';

class More_details extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            details: {}
        }
    }

    UNSAFE_componentWillMount(){
        console.log('Прежде чем компонент <More_details /> был смонтирован');
        API.fetchMovieDetails(this.state.id).then(res=>{
            return res.json().then(res=>
                this.setState(()=>({
                    details: res,
                }))
            )
        }).catch(()=>console.log("Ошибочка вышла!"))
    }

    render(){
        return(
            <div className="app">
                <Nav />
                <div className="page_movie">
                    <Media>
                        <img
                            width={300}
                            height={450}
                            className="mr-3"
                            src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+`${this.state.details.poster_path}`}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <div className="title">
                                <span>
                                    <h2 className="l">{this.state.details.title}</h2>
                                    <span> ({this.state.details.release_date})
                                    </span>
                                </span>
                            </div>
                            <div className="header_info">
                                <h3>Обзор</h3>
                                <div className="overview">
                                    <p>
                                        {this.state.details.overview}
                                    </p>
                                </div>
                            </div>
                            <div className="fact">
                                <h3>Факты</h3>
                                <Container>
                                    <Row>
                                        <Col><p><strong>Исходное название:</strong></p> {this.state.details.original_title}</Col>
                                        <Col><p><strong>Бюджет:</strong></p> ${this.state.details.budget}</Col>
                                        <Col><p><strong>Статус:</strong></p> {this.state.details.status}</Col>
                                        <Col><p><strong>Доход:</strong></p> ${this.state.details.revenue}</Col>
                                        <Col><p><strong>Продолжительность:</strong></p> {this.state.details.runtime} мин.</Col>
                                    </Row>
                                </Container>
                            </div>
                        </Media.Body>
                    </Media>
                </div>
            </div>
        )
    }
}

export default More_details;