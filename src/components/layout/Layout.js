import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
  const { children, titulo } = props
    return (
      <React.Fragment>
        {/* fondo */}
      {/* <img className="card-img card-cont-img" src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" /> */}
        <Header titulo = { titulo }/>

        { children }

        <Footer />
      </React.Fragment>
    );
}
 
export default Layout;
