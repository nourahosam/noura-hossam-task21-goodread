import React, { useContext} from 'react';
import Book from './Book';
import { DataContext } from './DataContext';

const List = (props) => {
    const { books } = useContext(DataContext);
    return (
        <div>
            <span><h2>{props.title}</h2>
                <hr></hr>
            </span>

            <div className='main-container'>

                {books.map((el) => {
                    if (el.status === props.title) {
                        console.log({ ...el });
                        return (<Book {...el} />)
                    }
                })}
            </div>
        </div>
    )
}

export default List;