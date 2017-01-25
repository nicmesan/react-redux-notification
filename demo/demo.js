import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DemoMain from './demo_main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {notificationsMiddleware, notificationsReducer} from '../src'
import rootReducer from './demo_reducer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(notificationsMiddleware),

	);

ReactDOM.render(
	<Provider store={store}>
		<DemoMain />
	</Provider>
	, document.querySelector('.container'));