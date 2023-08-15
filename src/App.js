import "./App.css";
import NavBar from './components/Navbar';
import Home from './components/Home';
import Wish from './components/Wish';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Contents from './Contents.json';

function App() {
  const [list, setList] = useState(Contents);

  return (
    <BrowserRouter>
      <div id='wrap'>
        <h1>Channel</h1>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home list={list} />} />
          <Route path='/wish' element={<Wish list={list} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;