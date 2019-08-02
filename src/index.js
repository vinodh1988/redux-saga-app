import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import {state} from './Redux/mappings/mappings';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './Redux/sagas/executionplans'
const sagaMiddleware = createSagaMiddleware();
let store=createStore(state,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch({type:'REVIEW_ACTION'});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
