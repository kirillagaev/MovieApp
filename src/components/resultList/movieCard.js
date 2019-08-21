import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie: this.props.movie
        }
    }

    render(){
        return(
            <Card style={{ width: 'auto'}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2"+`${this.state.movie.poster_path}`}/>
                <Card.Body>
                    <Card.Title>
                        <div>{this.state.movie.title}</div>
                        <span>Представлен {this.state.movie.release_date}</span>
                    </Card.Title>
                    <Card.Text>
                        {this.state.movie.overview}
                    </Card.Text>
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>
        )
    }
}

export default MovieCard;