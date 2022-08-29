import React, { useEffect, useState } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
const BookDetails = (props) => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        console.log("useEffect")
        //console.log(params.title);
        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            .then((res) => {
                console.log("res", res.data);
                setData(res.data.volumeInfo);
                setLoading(true);
            })
    }, [])
    return (<div className='book-details-container'>
        <div className='book-details-image'>
            {isLoading && <img src={data.imageLinks.thumbnail} />}
        </div>
        <div className='book-details-content'>
            <h2>{isLoading && data.title}</h2>
            <p> {isLoading && data.authors} | {isLoading && data.publisher}</p>
            <p>{isLoading && data.publishedDate}</p>
            <p>{isLoading && data.description}</p>
        </div>

    </div>)
}

export default BookDetails;