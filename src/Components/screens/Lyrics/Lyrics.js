import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../Layouts/Spinner';

const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/';
class LyricsScreen extends Component {

   state = {
		lyrics: {},
		track:{},
   }

   componentDidMount() {
      axios.get(`${API_URL}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${ process.env.REACT_APP_MM_KEY }`)
      
      .then((res) => {
			console.log(res.data);
			this.setState({lyrics: res.data.message.body.lyrics});
			return axios.get(`${API_URL}track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
		})
		.then((res) => {
			console.log(res.data)
			this.setState({track: res.data.message.body.track})
		})
      .catch((error) => console.log(error));
   }
   render() {
		const { lyrics, track} = this.state;
		
		if (lyrics === undefined || track === undefined || Object.keys(lyrics).length === 0 || Object.keys(track).length === 0 ){
			return <Spinner/>
		} else {
			return <h1>{ track.track_name }</h1>
		}
   }
}
export default LyricsScreen;