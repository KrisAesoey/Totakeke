import React from 'react';

import NavBar from '../navigation/NavBar';
import { MockAlbumCollections } from '../mock/albums';
import AlbumCollectionC from '../components/album-collection/AlbumCollection';

import './newAlbums.css';

const NewAlbums = () => {
  return (
    <body className="newAlbumsPage">
      <div>
        <NavBar />
      </div>
      <div>
        {MockAlbumCollections().sort( (a, b) => a.release < b.release ? 1 : -1).slice(0, 3).map( (collection) => 
            <AlbumCollectionC albumCollection={collection} />
        )}
      </div>
    </body>
  );
}

export default NewAlbums;
