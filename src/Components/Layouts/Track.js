import React from 'react'
import { Link } from 'react-router-dom';

const Track = (props) => {

   const { track, artist, album } = props;

   return (
      <div className="col-md-6">
         <div className="card mb-4 shadow-sm">
            <div className="card-body">
               <h3 className="card-title"> <i className="icon ion-md-headset icon-size-lg"></i>{ track }</h3>
               <h6 className="card-subtitle mb-2 text-muted">{ artist }</h6>
               <h5 className="card-title"> <i class="icon ion-md-heart-empty icon-size-sm"></i> { album }</h5>
               <br/>
               <Link to="/" className="btn btn-outline-primary btn-lg">Go somewhere</Link>
            </div>
         </div>
      </div>
   )
}

export default Track;