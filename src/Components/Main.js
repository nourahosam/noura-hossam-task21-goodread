import React from 'react';
import Book from './Book';
import Search from './Search';

import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
class Main extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            currentlyReading:[{ image: "image.jpg", name: "noura", author: "New author"}],
            read: [{ image: "image.jpg", name: "noura2", author: "New author"}],
            wantToRead: [{ image: "image.jpg", name: "noura3", author: "New author"}]
        }
    }
    // componentDidMount() {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=' + 'react')
    //         .then((res) => {
    //             console.log(res.data);

    //         })
    // }
    render() {
        return (<div>
            <Search />


        </div>)
    }
}

export default Main;