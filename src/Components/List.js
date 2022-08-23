import React from 'react';
import { Row } from 'react-bootstrap';
import Book from './Book';
const List = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {console.log("LISTTTTTTTTTTTTTTTTTTTTTTTTTTT")}
            {console.log(props)}
            <Row>
                {props.data.map((el) => {
                    
                    console.log({...el});
                    <Book {...el} handleClick={props.handleClick} />
                })}
                
            </Row>
        </div>
    )
}

export default List;