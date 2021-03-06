import React from 'react';
import { Album } from '../../types/Types';
import AlbumChartElement from './AlbumChartElement';

const AlbumChart = ({ albums }: { albums : Album[]}) => (
    <ul style={{ listStyleType: "none"}}>
        {albums.sort( (a, b) => (a.rating < b.rating ? 1 : -1))
        .map( (album) => <li key={album.id}><AlbumChartElement album={album} /> </li>)
        }
    </ul>
);

export default AlbumChart;