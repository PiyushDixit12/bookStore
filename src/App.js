
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import BookAppRoutes from './routes/BookAppRoutes';
import NavBar from './component/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <BookAppRoutes />
      </BrowserRouter>

    </>
  );
}

export default App;
