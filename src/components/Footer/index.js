import React, { Fragment } from 'react'
import './styles.css'
import { ButtonSocial } from '../ButtonSocial'

export const Footer = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 text-center fixed-bottom'>
            <ButtonSocial
              type='github'
              size='icon'
              href='https://github.com/CrisOspina'
            />

            <ButtonSocial
              type='twitter'
              size='icon'
              href='https://twitter.com/CrisOspina523'
            />

            <ButtonSocial
              type='linkedin'
              size='icon'
              href='https://www.linkedin.com/in/cristian-ospina-38814a124/'
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
