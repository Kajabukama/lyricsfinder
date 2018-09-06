import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeScreen from './Components/screens/Home/Home';
import NotFoundScreen from './Components/screens/Errors/404';

const Routes = () => {
   return(
      <React.Fragment>
         <Switch>
            <Route exact={ true } path='/' component={ HomeScreen }/>
            <Route path='*' component={ NotFoundScreen }/>
         </Switch>
      </React.Fragment>
   );
}
 export default Routes;