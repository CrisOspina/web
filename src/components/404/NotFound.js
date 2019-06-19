import React from 'react';
import './NotFound.css';
import AnimaFondo from '../AnimacionFondo/AnimaFondo';

const NotFound = () => {
  return ( 
    <React.Fragment>
      <div className="container-fluid cont">
        <div className="row">
          <AnimaFondo />
          <div className="col-12">
            <h1>Not found</h1>
            <h1>404</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default NotFound;