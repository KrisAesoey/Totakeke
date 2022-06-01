import './App.css';

import React from 'react';

import NavBar from './navigation/NavBar.tsx';
import { MockAlbums } from './mock/albums.ts';
import AlbumCard from './components/AlbumCard.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <div>
          {MockAlbums().map((album) => <AlbumCard album={album}/>)}
        </div>
      </body>
    </div>
  );
}

export default App;
