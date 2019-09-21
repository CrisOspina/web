import React from 'react'
import { NotFound } from '../../components/404'
import { LayoutHelmet } from '../../components/Helmet/LayoutHelmet'

export const NotFound404 = () => {
  return (
    <LayoutHelmet title='404' subtitle='Página Not Found'>
      <NotFound />
    </LayoutHelmet>
  )
}
