import React, { Fragment } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'
import { ContenedorMain } from '../ContenedorMain/'

export const NotFound = () => {
  return (
    <Fragment>
      <ContenedorMain>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Not found</h1>
            <h1>404</h1>
            <Link to='/'>
              <AwesomeButton type='secondary' size='medium'>
                Home
              </AwesomeButton>
            </Link>
          </div>
        </div>
      </ContenedorMain>
    </Fragment>
  )
}
