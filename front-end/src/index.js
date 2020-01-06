import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Imports
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

//IMPORT REDUCERS
import {userReducer} from './reducers/userReducer';

//COMPOSE ENHANCER
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
