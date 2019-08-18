import React, { Fragment } from 'react'
import './styles.css'
import 'react-awesome-button/dist/themes/theme-blue.css'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'

export const Descripcion = (props) => {
  const { saludo, name, descripcion, nameButton, toLink } = props
  return (
    <Fragment>
      <div className='container container-main'>
        <div className='row-fluid color-word'>
          <div className='col-12 '>
            <h2 className='deepshadow '>{saludo}</h2>
            <h1 className='deepshadow'>{name}</h1>
            <h2 className='deepshadow'>{descripcion}</h2>
          </div>
          <div className='row-fluid'>
            <div className='col-12 row-2'>
              <Link to={toLink}>
                <AwesomeButton type='secondary' size='large' className='aws-btn' >
                  {nameButton}
                </AwesomeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
