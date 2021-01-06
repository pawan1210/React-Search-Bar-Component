import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux"
import  stores  from './store';
const {store,persistor} =stores();
//const store=configureStore();
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

