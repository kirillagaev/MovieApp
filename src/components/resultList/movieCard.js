import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard (props){
    const { poster_path, title, release_date, overview, id } = props.movie;
        return(
            <Card style={{ width: 'auto'}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2"+`${poster_path}`}/>
                <Card.Body>
                    <Card.Title>
                        <div>{title}</div>
                        <span>Представлен {release_date}</span>
                    </Card.Title>
                    <Card.Text>
                        {overview}
                    </Card.Text>
                    <Link to={`/movie/${id}`}>
                        <Button variant="outline-secondary">Подробнее</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
}

export default MovieCard;