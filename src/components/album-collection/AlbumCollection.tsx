import React from 'react';
import { AlbumCollection } from '../../types/Types';
import { MockAlbums } from '../../mock/albums';
import AlbumCard from '../album-card/AlbumCard';
import './albumCollection.css';

const AlbumCollectionC = ( { albumCollection }: { albumCollection : AlbumCollection} ) => {
    const collection = MockAlbums().filter( (album) => albumCollection.albumIds.includes(album.id))
    return(
        <body className="albumCollectionBody">
            <h1 className="lineTitle">
                <span>{albumCollection.title}</span>
            </h1>
            <div>
                {
                    collection.sort((a, b) => a.artist > b.artist ? 1 : -1).map( ( album) => <AlbumCard album={ album } />)
                }
            </div>
        </body>
    );
}

export default AlbumCollectionC;
