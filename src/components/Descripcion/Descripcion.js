/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Descripcion.css';

const Descripcion = () => {
  return ( 
      <React.Fragment>
        <div className="row-fluid">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="card bg-dark text-white">
              <img className="card-img card-cont-img" src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
              <div className="card-img-overlay">
                <h2 className="card-title text-left deepshadow">Hello,</h2>
                <h1 className="card-title text-center deepshadow">my name is Cristian Ospina.</h1>
                <p className="card-text card-text-p text-center deepshadow">I am a software developer</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
   );
}
 
export default Descripcion;