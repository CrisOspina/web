import React from 'react';
import '../footer/Footer.css';
import ButtonSocial from '../Button/ButtonSocial';

const Footer = (props) => {
  return ( 
    <React.Fragment>
     <div className="container-fluid">
       <div className="row">
         <div className="col-sm-12 text-center fixed-bottom">
            <ButtonSocial 
              type = "github"
              size = "icon"
              href="https://github.com/CrisOspina"
            />

           <ButtonSocial 
            type = "twitter"
            size = "icon"
            href = "https://twitter.com/CrisOspina523"
           />

           <ButtonSocial 
            type = "linkedin"
            size = "icon"
            href = "https://www.linkedin.com/in/cristian-ospina-38814a124/"
           />
         </div>
       </div>
     </div>
    </React.Fragment>
   );
}
 
export default Footer;