import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom"
import HomeTaches from './GestionTaches/HomeTaches.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HomeTaches/>
    </BrowserRouter>
   
  </React.StrictMode>
);


