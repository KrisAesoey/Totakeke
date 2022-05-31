import React, { useState } from 'react';
import { Album } from '../types/Types';
import { GenreTagTextColorer, GenreTagBackgroundColorer } from '../utils/TagColoring';
import './albumContainer.css';

/**
 * Definition  of props passed to AlbumContainer component
 */
interface IAlbumContainerProps {
    album : Album;
}

function shortOrLongTitle(title: string): string {
    if (title.length > 15) {
        return "longTitle";
    }
    return "shortTitle";
}

/**
 * Container for presenting albums
 * @param album The album to present
 * @returns Component for album presentation
 */
const AlbumContainer : React.FC<IAlbumContainerProps> = ({ album } : IAlbumContainerProps) => {
    let titleClass: string = shortOrLongTitle(album.title);
    return (
        <button className="albumButton">
            <div className="albumContainer">
                <div>
                    <img src={album.image_url} alt="./rumours_fleetwoodmac.jpg" className="albumCover"/>
                </div>
                <div className="albumInfo">
                    <div className={titleClass}>
                        {album.title}
                    </div>
                    <div className="albumArtistCard">
                        {album.artist}
                    </div>
                    <div className="shortTitle">
                        {album.rating} / 10
                    </div>
                    <div className="genresContainer">
                        {album.genres.map((genre) =>
                            <span className="genreTag" style={{color: GenreTagTextColorer(genre), background: GenreTagBackgroundColorer(genre)}}>
                                {genre}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </button>
    );
};

export default AlbumContainer;