import React from 'react';
import { Tracklist } from '../../types/Types';

export const TracklistDisplay = ( { tracklist } : {tracklist : Tracklist}) => {
    return (
        <div className="tracklist">
            <ol>
                {tracklist.songs.map( (song) =>
                    <li key={song.title}>
                        {song.title} {song.rating}
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TracklistDisplay;