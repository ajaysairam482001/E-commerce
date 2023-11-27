import React from 'react';
import Signup from './signup2/Signup'; //use the signup page in signup2 as primary
import Login from './login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './Card';
import HomeList from './HomeList';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
      <Route path='/home' element={<HomeList/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
