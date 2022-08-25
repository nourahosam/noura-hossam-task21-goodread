import React, { useState, useContext } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
import BookDetails from './BookDetails';
import { Link, Route, Routes } from 'react-router-dom'
import { DataContext } from './DataContext';

const Book = (props) => {
    const { handleClick } = useContext(DataContext);
    return (
        // 
            <div className='book-card'>
                {/* <Link to="/details"> */}
                <div className='book'>
                    <div className='book-img'>
                        {props.readingModes.image && <img src={props.imageLinks.thumbnail ? `${props.imageLinks.thumbnail}` : ''} />}
                    </div>
                    <div className='dropdown'>
                        <DropdownButton id="dropdown-basic-button" variant='success ' className='drop-text' >
                            <Dropdown.Item onClick={() => { handleClick(props, "Currently Reading") }}>Currently Reading</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => { handleClick(props, "Want to Read") }}>Want to Read</Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleClick(props, "Read") }}>Read</Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleClick(props, "None") }}>None</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className='book-details'>
                    <p>{props.title ? props.title : "No Title Found"}</p>
                    <p>{props.authors ? props.authors : "No Author Found"}</p>
                </div>

                {/* </Link> */}
            </div>
        // </Link>
        )
}

export default Book;