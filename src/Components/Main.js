import React, { useState, useContext, useEffect } from 'react';
import Home from './Home';
import BookDetails from './BookDetails';
import { DataContext } from './DataContext';

const Main = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const book = JSON.parse(localStorage.getItem('books')) || [];
        console.log("useEffect", book)
        setBooks(book);
        console.log("useEffect2", book)
    }, []);
    const handleClick = (value, type) => {
        var present = false;
        for (var el in books) {
            console.log("El", books[el].title)
            console.log("Value Title", value.title)
            if (books[el].title === value.title) { present = true; }
        }
        if (type != 'None') {
            if (present) {
                console.log("include");
                for (var index in books) {
                    if (books[index].title === value.title) {
                        var allBooks = [...books];
                        allBooks[index].status = type;
                        setBooks(allBooks)
                        localStorage.setItem("books", JSON.stringify(books));
                    }
                }
            }
            if (!present) {
                var tmp = { ...value, status: type };
                var allBooks = [...books];
                allBooks.push(tmp);
                setBooks(allBooks);
                localStorage.setItem("books", JSON.stringify(books));
            }
        }
    }
    return (
        <>
            <DataContext.Provider value={{ books, setBooks, handleClick }}>
                <Home />
            </DataContext.Provider>
            
        </>
    )
}

export default Main;