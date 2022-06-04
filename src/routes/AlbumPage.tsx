import React from 'react';
import { useParams } from 'react-router-dom';
import { Album } from '..//types/Types';
import { MockAlbums } from '..//mock/albums';
import NavBar from '../navigation/NavBar';
import AlbumDisplay from '../components/album-display/AlbumDisplay';
import './albumPage.css';

const stringifyParameter = (param : string | undefined): string => {
    if (typeof param === 'string') {
        return param
    }
    return "undefined"
};

export const AlbumPage = () => {
    let { albumId } = useParams();
    let album : Album | undefined = MockAlbums().find( a => a.id == parseInt(stringifyParameter(albumId)));
    console.log(albumId, album)
    if (album === undefined) {
        throw new TypeError("No album matched the requested id!")
    }

    return (
        <div className="albumPage">
            <header>
                <NavBar />
            </header>
            <div className="albumPageBody">
                <AlbumDisplay album={album} />
            </div>
        </div>
    );
};

export default AlbumPage;
