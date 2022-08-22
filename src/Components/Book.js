import React from 'react';
import { Col } from 'react-bootstrap';
const Book = (props)=>{


        return(
        <Col>
        <div>
            <img src={`${props.imageLinks.thumbnail}`}/>
            </div>
            <p>{props.title}</p>
            <p>{props.authors}</p>
        </Col>)
}

export default Book;