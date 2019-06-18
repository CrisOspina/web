import React from 'react';

//componentes
import Layout from '../../components/layout/Layout';
import AboutMe from '../../components/AboutMe/AboutMe';

const About = (props) => {
  return ( 
    <React.Fragment>

      <Layout/>

      <AboutMe 
        descripcion = "My name is Cristian Ospina and i am interested in the javascript world and in the                     programming in general with the new technologies. 
                       Feel free to take a look at my projects on the 
                       web portfolio."
        profesion = "Full stack web developer."
        skills = "I have skills in:"
      />

    </React.Fragment>
   );
}
 
export default About;