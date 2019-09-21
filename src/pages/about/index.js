import React from 'react'
import { AboutMe } from '../../components/AboutMe'
import { DESCRIPCION, PROFESION, SKILLS } from './Me'
import { LayoutHelmet } from '../../components/Helmet/LayoutHelmet'

export const About = () => {
  return (
    <LayoutHelmet
      title='About'
      subtitle='Descripcion corta de mi perfil profesional en el mundo del desarrollo de software'
    >
      <AboutMe
        descripcion={DESCRIPCION}
        profesion={PROFESION}
        skills={SKILLS}
        nameButton='Portfolio'
        toLink='/portfolio'
      />
    </LayoutHelmet>
  )
}
