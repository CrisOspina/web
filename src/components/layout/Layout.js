import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import { Navbar, Button, Alignment } from "@blueprintjs/core";

const Layout = (props) => {
  const { children, titulo } = props
    return (
      <React.Fragment>
        <Header titulo = { titulo }/>

        { children }

        <Footer />
      </React.Fragment>
    );
}
 
export default Layout;
