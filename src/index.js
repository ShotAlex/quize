import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(application,document.getElementById('root'))

reportWebVitals()
