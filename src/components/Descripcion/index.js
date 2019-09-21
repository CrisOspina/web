import React, { Fragment } from 'react'
import './styles.css'
import 'react-awesome-button/dist/themes/theme-blue.css'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { ContenedorMain } from '../ContenedorMain/'
import IconoAtomo from '../Iconos/Atomo'

export const Descripcion = props => {
  const { saludo, name, descripcion, nameButton, toLink } = props
  return (
    <Fragment>
      <ContenedorMain>
        <div className='row-fluid color-word'>
          <Box
            boxShadow={0}
            borderRadius='0%'
            p={3}
            className='hvr-underline-from-center'
          >
            <div className='col-12'>
              <h2 className='deepshadow animated fadeIn'>{saludo}</h2>
              <h1 className='deepshadow animated fadeIn'>{name}</h1>
              <h2 className='deepshadow animated fadeIn'>{descripcion}</h2>
            </div>
          </Box>

          <div className='row-fluid botton-center'>
            <Link to={toLink} className='mt-5'>
              <AwesomeButton type='secondary' size='large' className='aws-btn'>
                {nameButton} <IconoAtomo />
              </AwesomeButton>
            </Link>
          </div>
        </div>
      </ContenedorMain>
    </Fragment>
  )
}
