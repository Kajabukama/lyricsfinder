import React, { Component } from 'react'
import { Consumer } from '../../../context';
import Spinner from '../../Layouts/Spinner';
import Track from '../../Layouts/Track';

class TrackList extends Component {
   render() {
      return (
         <Consumer>
            { value => {
               console.log(value);
               const { track_list, heading } =  value;
               console.log(track_list);
               if ( track_list === undefined || track_list.length === 0 ){
                  return <Spinner/>
               } else {
                  return (
                     <React.Fragment>
                        <h1 className="mb-5 text-center"> { heading } </h1>
                        <p>Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.</p>
                        <div className="row">
                           { track_list.map((item) => (
                              <Track 
                                 key={ item.track.track_id }
                                 artist={ item.track.artist_name } 
                                 track={ item.track.track_name }
                                 album={ item.track.album_name } 
                                 album_cover = { item.track.album_coverart_100x100
 }
                              />
                           )) }
                        </div>
                     </React.Fragment>
                  );
               }
            }}
         </Consumer>
      )
   }
}
export default TrackList;