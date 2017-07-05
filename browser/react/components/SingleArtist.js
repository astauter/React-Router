import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class SingleArtist extends Component {
    constructor() {
        super()
        this.state = {
            artist: {}
        }
    }

    componentDidMount () {
    axios.get(`/api/albums/${this.props.match.params.artistId}`)
    .then(res => res.data)
    .then(artist => {
      this.setState({artist})
    })
  }

    render () {
        const artist = this.state.artist

        return (
            <div>
            <h3>NAME</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
            </div>
        )
    }
}

export default SingleArtist;
