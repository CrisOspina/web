import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Proyectos from '../pages/proyectos/Proyectos';

//componente main
import Layout from '../components/layout/Layout';

const Routes = () => {
  return ( 
      <BrowserRouter>
        <Layout>
            <Switch>
              <Route exact path ="/" component = {Home} />
              <Route exact path ="/home" component = {Home} />
              <Route exact path ="/about" component = {About} />
              <Route exact path ="/portfolio" component = {Proyectos}/>
              {/* <Route component={NotFound} /> */}
            </Switch>
        </Layout>
      </BrowserRouter>
   );
}
 
export default Routes;