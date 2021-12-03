import * as React from 'react'
import {motion} from 'framer-motion'

import Footer from './Footer'
import Header from './Header'
import IconMoon from './IconMoon'

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
    },
  },
}

const Layout: React.FC = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <motion.div
      className='app'
      initial='hidden'
      animate='show'
      variants={container}
    >
      <Header />
      <main className='app__main'>{children}</main>
      <IconMoon />
      <Footer />
    </motion.div>
  )
}

export default Layout
