import React, { Fragment } from 'react'
import 'react-awesome-button/dist/themes/theme-blue.css'
import { AwesomeButtonSocial } from 'react-awesome-button'

export const ButtonSocial = (props) => {
  const { type, size, name, href } = props
  return (
    <Fragment>
      <AwesomeButtonSocial type={type} size={size} href={href}>
        {name}
      </AwesomeButtonSocial>
    </Fragment>
  )
}
