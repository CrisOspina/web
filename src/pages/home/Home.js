/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

//componentes
import Layout from '../../components/layout/Layout';
import Descripcion from '../../components/Descripcion/Descripcion';


class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        
        <Layout />

        <Descripcion 
          saludo      = "Hello,"
          name        = "my name is Cristian Ospina."
          descripcion = "I am a software developer."
          nameButton  = "Portfolio"
        />
      </React.Fragment>
    )
  }
}

export default Home;