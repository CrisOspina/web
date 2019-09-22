import React from 'react'
import IconoTrianguloDark from '../Iconos/TrianguloDark'
import IconoTrianguloWhite from '../Iconos/TrianguloWhite'
import IconoMoon from '../Iconos/Moon'

export const ContenedorMain = props => {
  const { children } = props
  return (
    <div className='container'>
      <div className='row hvr-float-shadow'>
        <div className='col-md-1 d-none d-sm-none d-md-block'>
          <br />
          <br />
          <IconoMoon />
        </div>
        <div className='offset-md-10 col-md-1 d-none d-sm-none d-md-block'>
          <br />
          <br />
          <IconoTrianguloWhite />
        </div>
      </div>

      {/* Contenido de páginas */}
      {children}

      <div className='row'>
        <div className='col-md-1 d-none d-sm-none d-md-block'>
          <br />
          <br />
          <IconoTrianguloDark />
        </div>
        <div className='offset-md-10 col-md-1 d-none d-sm-none d-md-block'>
          <br />
          <br />
          <IconoMoon />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}
