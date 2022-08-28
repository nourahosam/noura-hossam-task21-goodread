import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './Components/BookDetails';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/details/:id' element={<BookDetails />}/>
          <Route path='*' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
