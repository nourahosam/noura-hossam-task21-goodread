import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, CloseButton, InputGroup, Button } from 'react-bootstrap';
import Book from './Book';
import { DataContext } from './DataContext';

const Search = (props) => {
    const [timer, setTimer] = useState('');
    const [byBook, setByBook] = useState([]);
    const [byAuthor, setByAuthor] = useState([]);
    const { books } = useContext(DataContext);

    function onChange(event) {
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            searchBook(event.target.value);
            searchAuthor(event.target.value);
        }, 2000));


    }
    function searchBook(value) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
            .then((res) => {
                setByBook(res.data.items)
            })
            .catch((e)=>{
                console.log("Error");
                console.log(e);
            });
    }
    function searchAuthor(value) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${value}`)
            .then((res) => {
                setByAuthor(res.data.items)
            })
            .catch((e)=>{
                console.log("Error");
                console.log(e);
            });
    }


    return (
        <div className='search'>
            {console.log("searchhhhhhhhhhhhhhhhhhhhh1", books)}
            <InputGroup>
                <Button variant="outline-secondary" id="button-addon1" onClick={() => { props.setRender(false) }}>
                    <CloseButton />
                </Button>
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Search" onChange={onChange} />
            </InputGroup>

            <div className='main-container'>
                {console.log("searchhhhhhhhhhhhhhhhhhhhh2", books)}
                
                {byBook.map((el) => {
                    const exists = books.find(x=>x.title == el.title);
                    console.log(exists)
                    if (!exists) { 
                        console.log(books);  
                        return (<Book {...el.volumeInfo} />)
                    }
                })}
                {/* {byAuthor.map((el) => {
                    if (!books.find(x=>x.title === el.title)) { console.log("byauthor"); return (<Book {...el.volumeInfo} />) }
                })} */}
            </div>
        </div>
    )
}

export default Search;