import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import Atomo from '../Iconos/Atomo'
import IconoMoon from '../Iconos/Moon'

export default ({ close }) => (
  <div className='menu'>
    <IconoMoon />
    <div className='button raise'>
      <Link to='/home' onClick={close} style={{ color: '#fff' }}>
        <h2>Home</h2>
      </Link>
    </div>
    <div className='button raise'>
      <Link to='/about' onClick={close} style={{ color: '#fff' }}>
        <h2>About me</h2>
      </Link>
    </div>
    <div className='button raise'>
      <Link to='/portfolio' onClick={close} style={{ color: '#fff' }}>
        <h2>Portfolio</h2>
      </Link>
    </div>
    <Atomo className='mb-4' />
  </div>
)
