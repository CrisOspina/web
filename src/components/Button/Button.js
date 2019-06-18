import React from 'react';
import 'react-awesome-button/dist/themes/theme-blue.css';
import { AwesomeButton } from 'react-awesome-button';

const Button = (props) => {
  const { type, size, name } = props
  return ( 
    <React.Fragment>
      <AwesomeButton type={type} size={size}>
        {name}
      </AwesomeButton>
    </React.Fragment>
   );
}
 
export default Button;