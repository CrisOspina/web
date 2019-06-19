import React from 'react';
import '../AnimacionFondo/AnimaFondo.css';

const AnimaFondo = () => {
  return ( 
    <React.Fragment>
      <div className="container-fluid">
        <ul className="bg-bubbles">
          <li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li>
          <li></li><li></li><li></li>
        </ul>
      </div>
    </React.Fragment>
   );
}
 
export default AnimaFondo;