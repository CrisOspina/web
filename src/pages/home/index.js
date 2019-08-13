import React, { Fragment } from 'react'
import { Descripcion } from '../../components/Descripcion'
import { SALUDO, NAME, DESCRIPCION, NAMEBUTTON } from './Descripcion'

export const Home = () => {
  return (
    <Fragment>
      <Descripcion
        saludo={SALUDO}
        name={NAME}
        descripcion={DESCRIPCION}
        nameButton={NAMEBUTTON}
        toLink='/portfolio'
      />
    </Fragment>
  )
}
