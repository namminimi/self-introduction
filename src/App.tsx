import React, {useRef,useEffect} from 'react';
import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MyProject from './pages/MyProject';

function App() {

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<MyProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
