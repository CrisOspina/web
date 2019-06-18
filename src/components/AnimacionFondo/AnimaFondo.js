import React from 'react';
import '../AnimacionFondo/AnimaFondo.css';

const AnimaFondo = () => {
  return ( 
    <React.Fragment>
      <div className="wrapper">
        <div className="container">
          <ul class="bg-bubbles">
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default AnimaFondo;