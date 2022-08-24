import React, {useState} from 'react';
import axios from 'axios';
import { Form, CloseButton, InputGroup, Button } from 'react-bootstrap';
import Book from './Book';
import DataContext from './Main';

const Search = (props) => {
    const [timer, setTimer] = useState('');
    const [byBook, setByBook] = useState([]);
    const [byAuthor, setByAuthor] = useState([]);

    function onChange (event) {
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            searchBook(event.target.value);
            searchAuthor(event.target.value);
        }, 2000));


    }
    function searchBook (value) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
            .then((res) => {
                setByBook( res.data.items )
            });
    }
    function searchAuthor (value) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${value}`)
            .then((res) => {
                setByAuthor(res.data.items)
            });
    }
    
    
    return (
        <div className='search'>
            <InputGroup>
            <Button  variant="outline-secondary" id="button-addon1" onClick={()=>{props.setRender(false)}}>
                <CloseButton />
            </Button>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Search" onChange={onChange} />
            </InputGroup>

            <div className='main-container'>
            {byBook.map((el)=>{

                return(<Book {...el.volumeInfo} handleClick={props.handleClick} />)
            })}
            </div>
        </div>
    )
}

export default Search;