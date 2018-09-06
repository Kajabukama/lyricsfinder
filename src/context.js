import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {

   state = {
      track_list : [],
      heading: 'Top 10 Tracks'
   }

   componentDidMount(){
      axios.get(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b10bd295f901e234430a7d40235a54e1`)
      .then( result => console.log(result.data))
      .catch( error => console.log(error))
   }
   render() {
      return (
         <Context.Provider value={ this.state }>
            { this.props.children }
         </Context.Provider>
      )
   }
}

export const Consumer = Context.Consumer;
