import React from 'react';
import 'react-awesome-button/dist/themes/theme-blue.css';
import { AwesomeButtonSocial } from 'react-awesome-button';

const ButtonSocial = (props) => {
  const { type, size, name, href } = props
  return ( 
    <React.Fragment>
      <AwesomeButtonSocial type={type} size={size} href={href}>
        {name}
      </AwesomeButtonSocial>
    </React.Fragment>
   );
}
 
export default ButtonSocial;