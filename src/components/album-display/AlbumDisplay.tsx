import React from 'react';
import { Album } from '../../types/Types';
import './albumDisplay.css';

const AlbumDisplay = ( { album }: { album: Album}) => (
    <div className="albumDisplay">
        <div className="albumDisplayBody">
            <h1>{album.title} - {album.artist}</h1>
            <img className="albumDisplayCover" src={album.image_url} />
            <p>{album.length}</p>
            <p>{album.release.toISOString().split('T')[0]}</p>
            <ol>
                {album.songs.map( (song) => <li key={song}>{song}</li>)}
            </ol>
        </div>
    </div>
);

export default AlbumDisplay;
