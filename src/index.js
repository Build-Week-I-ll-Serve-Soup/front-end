import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {invReducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const inventoryData = createStore(
    invReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
<Provider store={inventoryData}>
<Router>
<App /></Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();