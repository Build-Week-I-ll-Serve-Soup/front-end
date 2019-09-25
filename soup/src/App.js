import React from 'react';
import { Route } from 'react-router-dom';
import Post from './Login/Post';
import Landing from './Landing/Landing';
// import logo from './logo.svg';
import './App.css';
import FormikUserForm from './Component/RegisterForm';
import './Component/RegisterStyle.css'
import FormikUpdateForm from './Component/InventoryUpdateForm'

function App() {
  

  return (
    <div className="App">
      <Route exact path='/' component ={Landing}/>
      <Route path='/login' component={Post}/>
      <Route  path='/register' component={FormikUserForm}/>
    </div>
  );
}

export default App;