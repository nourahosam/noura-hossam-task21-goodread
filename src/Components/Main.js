import React, { useState, useEffect } from 'react';
import Search from './Search';
import { Button } from 'react-bootstrap';
import List from './List';


const Main = () => {

    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [read, setRead] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [renderSearch, setRender] = useState(false);

    // useEffect(()=>{
    //     localStorage.setItem('currentlyReading', JSON.stringify(currentlyReading) || []);
    // }, [currentlyReading])

    // useEffect(()=>{
    //     localStorage.setItem('read', JSON.stringify(read) || []);
    // }, [read])

    // useEffect(()=>{
    //     localStorage.setItem('wantToRead', JSON.stringify(wantToRead) || []);
    // }, [wantToRead])

    useEffect(() => {
        const currtmp = JSON.parse(localStorage.getItem('currentlyReading')) || [];
        setCurrentlyReading(currtmp);
        const wtrtmp = JSON.parse(localStorage.getItem('wantToRead')) || [];
        setWantToRead(wtrtmp);
        const readtmp = JSON.parse(localStorage.getItem('read')) || [];
        setRead(readtmp);
    }, []);

    const handleClick = (value, type) => {

        if (type === "currentlyReading") {
            var present = false
            for (var index in currentlyReading) {
                if (currentlyReading[index].title == value.title) {
                    present = true;
                }
            }
            if (!present) {
                var tmp = currentlyReading;
                tmp.push(value)
                setCurrentlyReading(tmp);
                localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));
            }
        }
        if (type === "wantToRead") {
            var present = false;
            for (var index in wantToRead) {
                if (wantToRead[index].title == value.title) {
                    present = true;
                }
            } if (!present) {
                var tmp = wantToRead;
                tmp.push(value)
                setWantToRead(tmp);
            }
            localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
        }
        if (type === "read") {
            var present = false;
            for (var index in read) {
                if (read[index].title == value.title) {
                    present = true;
                }
            } if (!present) {
                var tmp = read;
                tmp.push(value)
                setRead(tmp);
            }
            localStorage.setItem("read", JSON.stringify(read));
        }
        if (type === "none") {
            for (var index in currentlyReading) {
                if (currentlyReading[index].title == value.title) {
                    var tmp = currentlyReading;
                    tmp.splice(index, 1);
                    setCurrentlyReading(tmp);
                    localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));

                }
            }
            for (var index in wantToRead) {
                if (wantToRead[index].title == value.title) {
                    var tmp = wantToRead;
                    tmp.splice(index, 1);
                    setWantToRead(tmp);
                    localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
                }
            }
            for (var index in read) {
                if (read[index].title == value.title) {
                    var tmp = read;
                    tmp.splice(index, 1);
                    setRead(tmp);
                    localStorage.setItem("read", JSON.stringify(read));
                }
            }
        }

    }

    return (<div>
        {console.log("RENDERERKLNSFN.EFKMFL/KSMV/LKSM")}
        {console.log(currentlyReading)}
        {console.log("RENDERERKLNSFN.EFKMFL/KSMV/LKSM")}
        {renderSearch && <Search handleClick={handleClick} setRender={setRender} />}
        <div className='cont'>

            <List data={currentlyReading} handleClick={handleClick} title="Currently Reading" />

            <Button variant="primary" className='fixed' onClick={() => { setRender(true) }}>Search</Button>
        </div>
    </div>)

}

export default Main;