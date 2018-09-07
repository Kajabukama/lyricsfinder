import React from 'react'
import { Link } from 'react-router-dom';

const Track = (props) => {

   const { track, artist, album, track_id } = props;

   return (
      <div className="col-md-4">
         <div className="card mb-4 shadow-sm">
            <div className="card-body">
               <h3 className="card-title text-truncate">{ artist }</h3>
               <h6 className="card-subtitle mb-2 text-muted"> <i className="icon ion-md-headset icon-size-sm"></i>{ track }</h6>
               <h5 className="card-title text-truncate"> <i className="icon ion-md-heart-empty icon-size-sm"></i> { album }</h5>
               <br/>
            </div>

            <div className="card-footer">
               <Link to={`lyrics/track/${ track_id }`} className="btn btn-outline-danger btn-lg btn-block">View Lyrics</Link>
            </div> 
         </div>
      </div>
   )
}

export default Track;