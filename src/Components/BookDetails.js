import React, { useEffect, useState, useContext } from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import axios from 'axios';
import { DataContext } from './DataContext';

const BookDetails = (props) =>{
    const params = useParams();
    const [data, setData] = useState([]);
    

    useEffect(()=>{
        const  books  = JSON.parse(localStorage.getItem('books')) || [];
        const book = books.find(x=>x.id == params.id)
        console.log("JSKENF.SDKJN.NFESDKL",book);
        setData(book);

    }, [])
    return(<div className='book-details-container'>
        <div className='book-details-image'>
        <img src={data.imageLinks.thumbnail ? `${data.imageLinks.thumbnail}` : ''}/>
        </div>
        <div className='book-details-content'>
    <h2>{data.title}</h2>
    <p>{data.authors} | {data.publisher}</p>
    <p>{data.publishedDate}</p>
    <p>{data.description}</p>
        </div>

    </div>)
}

export default BookDetails;