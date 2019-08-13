import React, { Fragment } from 'react'
import { AboutMe } from '../../components/AboutMe'
import { DESCRIPCION, PROFESION, SKILLS } from './Me'

export const About = () => {
  return (
    <Fragment>
      <AboutMe
        descripcion={DESCRIPCION}
        profesion={PROFESION}
        skills={SKILLS}
      />
    </Fragment>
  )
}
