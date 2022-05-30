import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Charts from './routes/Charts.tsx';
import NewAlbums from './routes/NewAlbums.tsx';
import reportWebVitals from './reportWebVitals';
import MyAccount from './routes/MyAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/new" element={<NewAlbums />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/account" element={<MyAccount />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
