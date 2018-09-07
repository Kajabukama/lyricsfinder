import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/';
class LyricsScreen extends Component {

   state = {
      pageTitle: 'Lyrics Screen'
   }

   componentDidMount() {
      axios.get(`${API_URL}track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then((res) => console.log(res.data))
         .catch((error) => console.log(error))
   }
   render() {
      return (
         <h2>{ this.state.pageTitle }</h2>
      )
   }
}
export default LyricsScreen;