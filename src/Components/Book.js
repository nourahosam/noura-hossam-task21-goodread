import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
import BookDetails from './BookDetails';
import { Link, Route, Routes } from 'react-router-dom'

const Book = (props) => {

    return (
        <div className='book-card'>


            <div className='book'>
                <div className='book-img'>
                    <img src={`${props.imageLinks.thumbnail}`} />
                </div>
                <div className='dropdown'>
                    <DropdownButton id="dropdown-basic-button" variant='success ' className='drop-text' >
                        <Dropdown.Item onClick={() => { props.handleClick(props, "currentlyReading") }}>Currently Reading</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => { props.handleClick(props, "wantToRead") }}>Want to Read</Dropdown.Item>
                        <Dropdown.Item onClick={() => { props.handleClick(props, "read") }}>Read</Dropdown.Item>
                        <Dropdown.Item onClick={() => { props.handleClick(props, "none") }}>None</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>


            <div className='book-details'>
                <p>{props.title}</p>
                <p>{props.authors}</p>

            </div>

            {/* <Routes>
            <Route exact path='/details' element={< BookDetails data={props}/>}></Route>
            </Routes> */}
        </div>)
}

export default Book;