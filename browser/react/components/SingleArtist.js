import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import AllAlbums from './AllAlbums'
import Songs from './Songs'

class SingleArtist extends Component {
    constructor() {
        super()
        this.state = {
            artist: {},
            albums: [],
            songs: [],
        }
    }

    componentDidMount () {
    let artistPromise = axios.get(`/api/artists/${this.props.match.params.artistId}`)
    let albumsPromise = axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
    let songsPromise = axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
    Promise.all([artistPromise, albumsPromise, songsPromise])
    .then(res => {
        // console.log('artist object', res[0].data) //this will be our artist object
        // console.log(res[1].data) //this will be our array of albums
        // console.log('songs', res[2]) //this will be our array of albums
        this.setState({
            artist: res[0].data,
            albums: res[1].data,
            songs: res[2].data
        })
    })
  }

    render () {
        const artist = this.state.artist;
        const albums = this.state.albums;
        const songs = this.state.songs;

        return (
            <div>
            <h3>{artist.name}</h3>
            <h4>ALBUMS</h4>
                <AllAlbums />
            <h4>SONGS</h4>
                <Songs songs={songs}/>
            </div>
        )
    }
}

export default SingleArtist;
