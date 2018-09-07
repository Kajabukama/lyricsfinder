import React, { Component } from 'react';
import axios from 'axios'

const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/';
const Context = React.createContext();

export class Provider extends Component {

   state = {
      track_list : [],
      pageSize: 50,
      heading: 'Top 10 Tracks'
   }

   componentDidMount(){
      axios.get(`${ API_URL }chart.tracks.get?page=2&page_size=${ this.state.pageSize }&country=us&f_has_lyrics=1&apikey=${ process.env.REACT_APP_MM_KEY }`)
      .then( (res) => this.setState({
         track_list: res.data.message.body.track_list,
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
