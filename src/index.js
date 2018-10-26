import React from 'react';
import ReactDOM from 'react-dom';
import PlaylistCover from './components/PlaylistCover';
import Playlist from './components/Playlist';

import './main.scss';

function App() {
  return (
    <div className="container-fluid App">
      <div className="row">
        <div className="col-md-4">
          <PlaylistCover/>
        </div>
        <div className="col-md-8">
          <Playlist/>
        </div>
      </div>
 
    </div>
    
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
