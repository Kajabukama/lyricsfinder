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
<<<<<<< HEAD
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=2&page_size=${this.state.pageSize}&country=us&f_has_lyrics=1&apikey=b10bd295f901e234430a7d40235a54e1`)
      .then( (result) => this.setState({
         track_list: result.data.message.body.track_list,
         heading: `Top ${ this.state.pageSize } Tracks `
      }))
      .catch( (error) => console.log(error))
=======
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=15&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then( (result) => this.setState({
         track_list: result.data.message.body.track_list
      }))
      .catch( error => console.log(error))
>>>>>>> f0ef6798a2e36e69e2866b07ea8f8806a7a50f0b
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
