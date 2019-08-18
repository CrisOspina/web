import React, { Fragment } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Fragment>
      <div className='container-fluid container-main'>
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
      </div>
    </Fragment>
  )
}
