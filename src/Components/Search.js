import React, {useState} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Book from './Book';

const Search = () => {
    const [timer, setTimer] = useState('');
    const [byBook, setByBook] = useState([]);
    const [byAuthor, setByAuthor] = useState([]);

    function onChange (event) {
        console.log("change")
        console.log(timer);
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            searchBook(event.target.value);
            searchAuthor(event.target.value);
        }, 2000));


    }
    function searchBook (value) {
        console.log(value, "Searchhhh");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
            .then((res) => {
                console.log(res.data.items);
                setByBook( res.data.items )
            });
    }
    function searchAuthor (value) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${value}`)
            .then((res) => {
                console.log(res.data.items);
                setByAuthor(res.data.items)
            });
    }
    return (
        <div>
            {console.log(byBook)}
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search" onChange={onChange} />
            {byBook.map((el)=>{
                console.log(el.volumeInfo);
                return(<Book {...el.volumeInfo} />)
            })}
        </div>
    )
}

export default Search;