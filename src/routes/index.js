import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Proyectos } from '../pages/proyectos'
import { NotFound404 } from '../pages/404'

// componente main
import { Layout } from '../components/Layout'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Proyectos} />
          <Route component={NotFound404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
