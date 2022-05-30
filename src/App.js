import './App.css';

import React from 'react';

import NavBar from './navigation/NavBar.tsx';
import { MockAlbums } from './mock/albums.ts';
import AlbumContainer from './components/AlbumContainer.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <div>
          {MockAlbums().map((album) => <AlbumContainer album={album}/>)}
        </div>
      </body>
    </div>
  );
}

export default App;
