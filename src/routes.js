import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeScreen from './Components/screens/Home/Home';
import LyricsScreen from './Components/screens/Lyrics/Lyrics';
import NotFoundScreen from './Components/screens/Errors/404';

const Routes = () => {
   return(
      <React.Fragment>
         <Switch>
            <Route exact path="/" component={ HomeScreen }/>
            <Route exact path="/lyrics/track/:id" component={ LyricsScreen }/>
            <Route path="*" component={ NotFoundScreen }/>
         </Switch>
      </React.Fragment>
   );
}
 export default Routes;