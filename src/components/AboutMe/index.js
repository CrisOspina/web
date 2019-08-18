import React, { Fragment } from 'react'
import './styles.css'
import { Button } from '../Button'
import data from '../Skills/index.json'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'

export const AboutMe = (props) => {
  const datos = data
  const { descripcion, profesion, skills, toLink, nameButton } = props

  const dataSkill = () => (
    datos.map((data) => {
      return <Button className='aws-btn' type={data.type}
        size={data.size} name={data.name} key={data.id}
      />
    })
  )

  return (
    <Fragment>
      <div className='container container-main'>
        <div className='row pb-5'>
          <div className='col-sm-12 col-lg-6 border-center'>
            <div className='cont-text'>
              <p>{ descripcion }</p>
              <p>{ profesion }</p>
              <Link to={toLink}>
                <AwesomeButton type='secondary' size='large' className='aws-btn' >
                  {nameButton}
                </AwesomeButton>
              </Link>
            </div>
          </div>
          <div className='col-sm-12 col-lg-6 text-center'>
            <p className='skill'>{ skills }</p>
            {dataSkill()}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
