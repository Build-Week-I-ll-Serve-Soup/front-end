import React from 'react';
import { Route } from 'react-router-dom';
import Post from './Login/Post';
import Landing from './Landing/Landing';
// import logo from './logo.svg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      {/* <Landing/> */}
      <Route exact path='/' component ={Landing}/>
      <Route path='/login' component={Post}/>
    </div>
  );
}

export default App;
