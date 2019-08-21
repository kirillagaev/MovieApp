import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import MovieCard from './movieCard';

class createListFilm extends Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        console.log("Компонент размонтирован");
        this.props.clear();
    }
    render(){
        return (
            <Modal
                size="lg"
                show={this.props.show}
                onHide={() => this.props.onHide()}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {`Результаты поиска по запросу: "${this.props.value}"`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.list.length ?  this.props.list.map((i)=>
                        <MovieCard key={i.id} movie={i}/>
                    ):"Ничего нет!" }
                </Modal.Body>
            </Modal>
        )
    }
}


export default createListFilm;