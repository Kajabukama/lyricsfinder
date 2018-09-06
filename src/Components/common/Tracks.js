import React, { Component } from 'react'
import { Consumer } from '../../context';

class TrackList extends Component {
   render() {
      return (
         <Consumer>
            { value => {
               console.log(value);
               return <h1>{ value.heading }</h1>
            }}
         </Consumer>
      )
   }
}
export default TrackList;