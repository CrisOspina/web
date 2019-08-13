import React, { Fragment } from 'react'
import './styles.css'
import { AnimaFondo } from '../AnimacionFondo'

export const NotFound = () => {
  return (
    <Fragment>
      <div className='container-fluid cont'>
        <div className='row'>
          <AnimaFondo />
          <div className='col-12'>
            <h1>Not found</h1>
            <h1>404</h1>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
