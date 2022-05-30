import React from 'react';

import NavBar from '../navigation/NavBar';
import { MockAlbums } from '../mock/albums';
import AlbumChart from '../components/album-chart/AlbumChart';

import './charts.css';

const Charts = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body className="chartPage">
        <div className="chartItem">
          {<AlbumChart albums={MockAlbums()} />}
        </div>
      </body>
    </div>
  );
}

export default Charts;
