import React from 'react';
import Book from './Book';
const List = (props) => {
    return (
        <div>
            <span><h2>{props.title}</h2>
            <hr></hr>
            </span>
            
            <div className='main-container'>
                {console.log("LISTTTTTTTTTTTTTTTTTTTTTTTTTTT")}
                {console.log(props)}
                {props.data.map((el) => {
                    console.log({ ...el });
                    return (<Book {...el} handleClick={props.handleClick} />)
                })}
            </div>
        </div>
    )
}

export default List;