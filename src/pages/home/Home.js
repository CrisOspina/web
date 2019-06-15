/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

//componentes
import Layout from '../../components/layout/Layout';
import Descripcion from '../../components/Descripcion/Descripcion';

class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Layout titulo = "Home" />
        <Descripcion />
      </React.Fragment>
    )
  }
}

export default Home;