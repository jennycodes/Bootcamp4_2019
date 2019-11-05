import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data';

//The app is now passing the data as a property
console.log("inside of index.js")
ReactDOM.render(<App data={data} />, document.getElementById('root'));
