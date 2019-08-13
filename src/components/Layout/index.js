import React, { Fragment } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = (props) => {
  const { children } = props
  return (
    <Fragment>
      <Header />

      { children }

      <Footer />
    </Fragment>
  )
}
