import './App.css';

import React from 'react';

import NavBar from './navigation/NavBar.tsx';
import { MockAlbums } from './mock/albums.ts';
import AlbumCard from './components/album-card/AlbumCard.tsx';

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
