import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {

   state = {
      track_list : [],
      pageSize: 50,
      heading: 'Top 10 Tracks'
   }

   componentDidMount(){
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=2&page_size=${this.state.pageSize}&country=us&f_has_lyrics=1&apikey=b10bd295f901e234430a7d40235a54e1`)
      .then( (result) => this.setState({
         track_list: result.data.message.body.track_list,
         heading: `Top ${ this.state.pageSize } Tracks `
      }))
      .catch( (error) => console.log(error))
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
