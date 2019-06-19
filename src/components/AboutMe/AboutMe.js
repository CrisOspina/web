/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

//components
import './AboutMe.css';
import Button from '../Button/Button';
import data from '../Skills/DataSkill.json';
import AnimaFondo from '../AnimacionFondo/AnimaFondo';

const AboutMe = (props) => {
  const datos = data
  const { descripcion, profesion, skills } = props

  return ( 
    <React.Fragment>
      <div className="cont-end">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-sm-12 offset-lg-4 col-lg-4 text-center">
              <div className="cont-text">
                <p>{ descripcion }</p>
                <p>{ profesion }</p>
                <p>{ skills }</p>
              </div>
            </div>
          </div>
          
          <div className="row-fluid pb-4" >
            <div className="offset-sm-1 col-sm-10 text-center">
              {/* animacion de fondo */}
              <AnimaFondo />
                { datos.map((data) => {
                    return <Button className="aws-btn" type={data.type} 
                                  size={data.size} name={data.name} key={data.id}
                    />
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
   );     
}
 
export default AboutMe;