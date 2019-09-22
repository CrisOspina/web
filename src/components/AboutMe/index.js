import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import data from '../Skills/index.json'
import { AwesomeButton } from 'react-awesome-button'

import { Button } from '../Button'
import { ContenedorMain } from '../ContenedorMain/'
import IconoAtomo from '../Iconos/Atomo'

export const AboutMe = props => {
  const datos = data
  const { descripcion, profesion, skills, toLink, nameButton } = props

  const dataSkill = () =>
    datos.map(data => {
      return (
        <Button
          className='aws-btn'
          type={data.type}
          size={data.size}
          name={data.name}
          key={data.id}
        />
      )
    })

  return (
    <Fragment>
      <ContenedorMain>
        <div className='row pb-5'>
          <div className='col-sm-12 col-lg-6 border-center hvr-underline-reveal'>
            <div className='cont-text animated fadeIn'>
              <p>{descripcion}</p>
              <br />
              <p>{profesion}</p>
              <br />
              <Link to={toLink}>
                <AwesomeButton
                  type='secondary'
                  size='large'
                  className='aws-btn'
                >
                  {nameButton} <IconoAtomo />
                </AwesomeButton>
              </Link>
            </div>
          </div>
          <div className='col-sm-12 col-lg-6 text-center animated fadeIn hvr-grow-shadow'>
            <p className='skill'>{skills}</p>
            {dataSkill()}
          </div>
        </div>
      </ContenedorMain>
    </Fragment>
  )
}
