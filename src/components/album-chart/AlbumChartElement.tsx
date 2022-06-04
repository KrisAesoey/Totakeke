import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/Types';
import { GenreTagTextColorer, GenreTagBackgroundColorer } from '../../utils/TagColoring';
import './albumChartElement.css';

/**
 * Container for presenting albums
 * @param album The album to present
 * @returns Component for album presentation
 */
const AlbumChartElement = ({ album } : { album : Album }) => {
    return (
        <Link to={`/albums/${album.id}`}>
            <button className="albumButtonChart">
                <div className="albumChart">
                    <div>
                        <img src={album.image_url} alt="./rumours_fleetwoodmac.jpg" className="albumCoverChart"/>
                    </div>
                    <div>
                        <b>{album.title}</b>
                    </div>
                    <div className="albumArtist">
                        {album.artist}
                    </div>
                    <div>
                        {album.genres.map((genre) =>
                            <span key={genre} className="genreTagChart" style={{color: GenreTagTextColorer(genre), background: GenreTagBackgroundColorer(genre)}}>
                                {genre}
                            </span>
                        )}
                    </div>
                    <div className="albumRating">
                        <h1>{album.rating}</h1>
                    </div>
                </div>
            </button>
        </Link>
    )
};

export default AlbumChartElement;