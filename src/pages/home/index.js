import React from 'react'
import { Descripcion } from '../../components/Descripcion'
import { SALUDO, NAME, DESCRIPCION, NAMEBUTTON } from './Descripcion'
import { LayoutHelmet } from '../../components/Helmet/LayoutHelmet'

export const Home = () => {
  return (
    <LayoutHelmet title='Home' subtitle='Página principal del portafolio'>
      <Descripcion
        saludo={SALUDO}
        name={NAME}
        descripcion={DESCRIPCION}
        nameButton={NAMEBUTTON}
        toLink='/portfolio'
      />
    </LayoutHelmet>
  )
}
