import React, { useState, useEffect, useContext } from 'react';
import Search from './Search';
import { Button } from 'react-bootstrap';
import List from './List';
import { DataContext } from './DataContext';
import BookDetails from './BookDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
    const { books, setBooks, handleClick } = useContext(DataContext);

    // const [currentlyReading, setCurrentlyReading] = useState([]);
    // const [read, setRead] = useState([]);
    // const [wantToRead, setWantToRead] = useState([]);
    const [renderSearch, setRender] = useState(false);





    return (<>
        <div className='header'>
            <h1>MyReads</h1>
        </div>
        {console.log("Homeeeeeeeeeeeeeeeeeeeeeeeee", books)}
        {renderSearch && <Search setRender={setRender} />}
        <div className='search-btn'>
            <Button variant="primary" onClick={() => { setRender(true) }}>+</Button>
        </div>
        <div className='main-list'>
            <List title="Currently Reading" />
            <List title="Want to Read" />
            <List title="Read" />
        </div>
        
    </>)

}

export default Home;