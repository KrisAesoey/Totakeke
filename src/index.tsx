import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Charts from './routes/Charts';
import NewAlbums from './routes/NewAlbums';
import reportWebVitals from './reportWebVitals';
import MyAccount from './routes/MyAccount';
import AlbumPage from './routes/AlbumPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/new" element={<NewAlbums />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/account" element={<MyAccount />} />
      <Route path="/albums/:albumId" element={<AlbumPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
