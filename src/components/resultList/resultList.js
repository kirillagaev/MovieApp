import React from 'react';
import { Modal } from 'react-bootstrap';

import MovieCard from './movieCard';

function createListFilm (props) {
    const { onHide, value, list } = props;
    return (
        <Modal
            size="lg"
            show
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {`Результаты поиска по запросу: "${value}"`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {list.length ?  list.map((i)=>
                        <MovieCard key={i.id} movie={i}/>
                    ):"Ничего нет!" }
                </Modal.Body>
        </Modal>
    )
}


export default createListFilm;