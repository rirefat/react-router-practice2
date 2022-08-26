import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import FriendsInfo from './components/FriendsInfo/FriendsInfo';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className='App'>
      <h1>React Router Practice</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/friends/:id" element={<FriendsInfo></FriendsInfo>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;