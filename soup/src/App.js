import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './Login/Login';
import Landing from './Landing/Landing';
import InventoryList from './components/InventoryList';
import './App.css';
import UserForm from './Component/RegisterForm';
import './Component/RegisterStyle.css'

function App() {

  return (
    <div className="App">
      <Route exact path='/' component ={Landing}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={UserForm}/>
      <PrivateRoute path='/inventory' component={InventoryList}/>
    </div>
  );
}

export default App;