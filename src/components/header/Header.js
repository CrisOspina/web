/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../header/Header.css';

const Header = (props) => {
  const { titulo } = props
  return ( 
    <React.Fragment>
      {/* home */}
      <div className="row-fluid">
        <div className="col-cont col-12">
          <header>
            <a className="titulo titulo-a" href="#">{titulo}</a>
          </header>
        </div>
      </div>
    

      {/* Navegación */}
      <div className="container">
        <div className="col-container mt-1">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="col-container-item">
                <a className="col-container-text" href="#">
                  Perfil
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">  
              <div className="col-container-item">
                <a className="col-container-text" href="#">
                  CV
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">  
              <div className="col-container-item">
                <a className="col-container-text" href="#">
                  Trabajos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animación */}
      {/* https://45.media.tumblr.com/263e52c5f30e213c099a62a245242289/tumblr_n8bsno0htg1qmzbpoo1_1280.gif */}
      <div className="Project">
        <img src="https://philna.sh/assets/posts/react-738ca5dd60ecf11214419e9d6c847d1e2e4ad88c3f147e12d8adfd25b76e6e66.gif" alt="" className="imgMasked" />
        <div className="Project-hail"></div>
      </div>
      <div className="Project2">
        <img src="https://philna.sh/assets/posts/react-738ca5dd60ecf11214419e9d6c847d1e2e4ad88c3f147e12d8adfd25b76e6e66.gif" alt="" className="imgMasked2" />
        <div className="Project-hail2"></div>
      </div>
    </React.Fragment>
  );
}
 
export default Header;