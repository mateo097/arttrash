import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './views/public/Login';
import { Business } from './views/business/Business';
import { LoadProduct } from './views/business/load-product/LoadProduct';
import { Admin } from './views/admin/Admin';
import { LoadSale } from './views/admin/load-sale/LoadSale';
import './styles/framework.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/bisnes' element={<Business/>} />
        <Route path='/load' element={<LoadProduct/>} />
        <Route path='/sales' element={<LoadSale/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
