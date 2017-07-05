import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists'
import SingleArtist from './SingleArtist'

export default class Main extends Component {

  render () {
    return (
    <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
            <div className="col-xs-10">
            <Route exact path='/' component={AllAlbums} />
            <Route exact path='/albums' component={AllAlbums} />
            <Route path='/albums/:albumId' component={SingleAlbum} />
            <Route path='/artists' component={AllArtists} />
            <Rout path='/artists/:artistId' component={SingleArtist}
          </div>
        <Player />
      </div>
    </HashRouter>
    );
  }
}
