import React, { useState, useContext, useEffect } from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

        //if (!())) console.log("Not found!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        var present = false;
        for (var el in books) {
            console.log("El", books[el].title)
            console.log("Value Title", value.title)
            if (books[el].title === value.title) { present = true; }
        }
        console.log("Present", present);
        console.log("Type", type);
        console.log("Value", value);
        //const exists = books.find(x=>x.title === value.title);
        if (type != 'None') {
            if (present) {
                console.log("include");
                //var allBook = books.filter( book => book.title === value.title);
                //console.log("All Book Present",allBook)
                for (var index in books) {
                    //console.log("Index1", index);
                    if (books[index].title === value.title) {
                        var allBooks = [...books];
                        // console.log("Books Present All Books type of");
                        // console.log(typeof allBooks)

                        //console.log("Books Present All Books", allBooks);
                        allBooks[index].status = type;
                        setBooks(allBooks)
                        // console.log("Books Present set books", books);
                        localStorage.setItem("books", JSON.stringify(books));
                    }
                }
            }
            if (!present) {
                console.log("not include")
                //value['status'] = type;
                var tmp = { ...value, status: type };
                console.log("TMPPPPPPPP", tmp)
                var allBooks = [...books];
                console.log("All Books Not Present", allBooks)
                //allBooks.push(tmp);
                allBooks.push(tmp);
                //var finalBooks = [...allBooks];
                console.log("All Books Not Present after push", allBooks)
                setBooks(allBooks);
                console.log("All Books Not Present setBooks", books)
                console.log("JSON.stringify(finalBooks)")
                console.log(JSON.stringify(books))
                localStorage.setItem("books", JSON.stringify(books));
            }
        }
    }
    return (
        <>
            <DataContext.Provider value={{ books, setBooks, handleClick }}>
                <Home />
            </DataContext.Provider>
            {/* <BrowserRouter> */}
                {/* <Routes>
                     <Route path='/details' element={<BookDetails />} /> 
                    <Route path='*' element={ <Home /> } />
                </Routes> */}
            {/* </BrowserRouter> */}
        </>
    )
}

export default Main;