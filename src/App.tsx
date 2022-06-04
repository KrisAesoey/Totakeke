import './App.css';

import React from 'react';

import NavBar from './navigation/NavBar';
import { MockAlbums } from './mock/albums';
import AlbumCard from './components/album-card/AlbumCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-body">
        <div>
          {MockAlbums().map((album) => <AlbumCard album={album}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
