import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';


const store = createStore(rootReducer);

const root = (
	<Provider store={store}>
	   <App/>
	</Provider>
);

ReactDOM.render(
	root, document.getElementById('root')
);
