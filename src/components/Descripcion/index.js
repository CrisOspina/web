import React, { Fragment } from 'react'
import './styles.css'
import Foto from '../img/img1.jpg'
import 'react-awesome-button/dist/themes/theme-blue.css'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'

export const Descripcion = (props) => {
  const { saludo, name, descripcion, nameButton, toLink } = props
  return (
    <Fragment>
      <div className='cont-end'>

        <div className='container-fluid pb-4'>
          <div className='row-fluid'>
            <div className='col-12'>
              <h2 className='card-title text-center deepshadow'>{saludo}</h2>
              <div className='col-12 col-sm-12'>
                <h1 className='card-title text-center deepshadow'>{name}</h1>
              </div>
              <div className='col-12 col-sm-12'>
                <h2 className='card-text card-text-p text-center deepshadow'>{descripcion}</h2>
              </div>
            </div>
          </div>
          <div className='row-fluid mt-3'>
            <div className='card bg-dark text-white'>
              <img className='card-img' src={Foto} alt='Card' />
              <div className='card-img-overlay'>
                <h5 className='card-title'>
                  <Link to={toLink}>
                    <AwesomeButton type='secondary' size='large' className='aws-btn' >
                      {nameButton}
                    </AwesomeButton>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
