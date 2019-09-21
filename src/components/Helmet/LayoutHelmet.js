import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export const LayoutHelmet = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | Portfolio</title>}
        {subtitle && <meta name='Portafolio web personal, Cristian Ospina, @crisospina523, CrisOspina' content={subtitle} />}
      </Helmet>
      {children}
    </Fragment>
  )
}
