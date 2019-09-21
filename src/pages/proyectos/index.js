import React from 'react'
import Cards from '../../components/Cards/Cards'
import { LayoutHelmet } from '../../components/Helmet/LayoutHelmet'

export const Proyectos = () => {
  return (
    <LayoutHelmet
      title='Learning trip'
      subtitle='Todos los proyectos personales con su respectivo GitHub'
    >
      <Cards />
    </LayoutHelmet>
  )
}
