import React from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import Post from './Login/Post';
import Landing from './Landing/Landing';
// import logo from './logo.svg';
=======
>>>>>>> d8f5b8ebd6af38c49541d4a0bfc898aaeb578469
import './App.css';
import FormikUserForm from './Component/RegisterForm';
import './Component/RegisterStyle.css'

function App() {
  

  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Landing/> */}
      <Route exact path='/' component ={Landing}/>
      <Route path='/login' component={Post}/>
=======
     <FormikUserForm />
>>>>>>> d8f5b8ebd6af38c49541d4a0bfc898aaeb578469
    </div>
  );
}

export default App;
