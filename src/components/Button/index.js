import React, { Fragment } from 'react'
import 'react-awesome-button/dist/themes/theme-blue.css'
import { AwesomeButton } from 'react-awesome-button'

export const Button = (props) => {
  const { type, size, name } = props
  return (
    <Fragment>
      <AwesomeButton type={type} size={size}>
        {name}
      </AwesomeButton>
    </Fragment>
  )
}
