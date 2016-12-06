import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './components/App';


const store = createStore(rootReducer, applyMiddleware(thunk));

const root = (
	<Provider store={store}>
	   <App/>
	</Provider>
);

ReactDOM.render(
	root, document.getElementById('root')
);
