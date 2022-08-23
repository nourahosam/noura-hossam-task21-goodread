import React, { useState } from 'react';
import { Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
import BookDetails from './BookDetails';
import {Link, Route, Routes} from 'react-router-dom'

const Book = (props) => {

    return (
        <div className='cardd'>

            <div className='get-details'>
                <div className='book'>

                    <img src={`${props.imageLinks.thumbnail}`} />
                </div>
            </div>

            <p>{props.title}</p>
            <p>{props.authors}</p>
            <DropdownButton id="dropdown-basic-button" title="" className=''>
                <Dropdown.Item onClick={() => { props.handleClick(props, "currentlyReading") }}>Currently Reading</Dropdown.Item>
                <Dropdown.Item onClick={(e) => { props.handleClick(props, "wantToRead") }}>Want to Read</Dropdown.Item>
                <Dropdown.Item onClick={() => { props.handleClick(props, "read") }}>Read</Dropdown.Item>
                <Dropdown.Item onClick={() => { props.handleClick(props, "none") }}>None</Dropdown.Item>
            </DropdownButton>
            {/* <Routes>
            <Route exact path='/details' element={< BookDetails data={props}/>}></Route>
            </Routes> */}
        </div>)
}

export default Book;