import React, { Fragment } from 'react'
import './styles.css'
import { Button } from '../Button'
import data from '../Skills/index.json'
import { AnimaFondo } from '../AnimacionFondo'

export const AboutMe = (props) => {
  const datos = data
  const { descripcion, profesion, skills } = props

  return (
    <Fragment>
      <div className='cont-end'>
        <div className='container-fluid'>
          <div className='row-fluid'>
            <div className='col-sm-12 offset-lg-4 col-lg-4 text-center'>
              <div className='cont-text'>
                <p>{ descripcion }</p>
                <p>{ profesion }</p>
                <p>{ skills }</p>
              </div>
            </div>
          </div>

          <div className='row-fluid pb-4' >
            <div className='offset-sm-1 col-sm-10 text-center'>
              {/* animacion de fondo */}
              <AnimaFondo />
              { datos.map((data) => {
                return <Button className='aws-btn' type={data.type}
                  size={data.size} name={data.name} key={data.id}
                />
              })
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
