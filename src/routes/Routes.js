import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes
import Home from '../pages/home/Home';
import About from '../pages/about/About';

const Routes = () => {
  return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component = {Home} />
          <Route exact path ="/home" component = {Home} />
          <Route exact path ="/about" component = {About} />
          {/* <Route exact patch ="/portfolio" component = {}/>
          <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
   );
}
 
export default Routes;