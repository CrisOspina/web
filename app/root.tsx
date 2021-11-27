import * as React from 'react'
import {Link, Outlet, useCatch} from 'remix'
import type {LinksFunction} from 'remix'
import {motion} from 'framer-motion'
import Document from './ui/Document'

import layoutStyleUrl from '~/styles/layout.css'
import globalStylesUrl from '~/styles/global.css'
import darkStylesUrl from '~/styles/dark.css'

export let links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: globalStylesUrl},
    {
      rel: 'stylesheet',
      href: darkStylesUrl,
      media: '(prefers-color-scheme: dark)',
    },
    {rel: 'stylesheet', href: layoutStyleUrl},
  ]
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Layout({children}: React.PropsWithChildren<{}>) {
  const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  }

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
      },
    },
  }

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1},
  }

  return (
    <motion.div
      className='app'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <header className='app__header'>
        <div className='container app__header-content'>
          <motion.span variants={item}>
            <Link to='/' title='Home'>
              Cristian Ospina
            </Link>
          </motion.span>
          <motion.nav
            aria-label='Main navigation'
            initial='hidden'
            animate='visible'
            transition={{ease: 'easeOut', duration: 2}}
            variants={variants}
            className='app__header-nav'
          >
            <motion.ul variants={container} initial='hidden' animate='show'>
              <motion.li variants={item}>
                <Link to='/about'>About</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to='/projects'>Projects</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to='/blog'>Blog</Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
      </header>
      <main className='app__main'>{children}</main>

      <motion.div
        className='app__rocket-img'
        drag
        dragConstraints={{
          top: -500,
          left: -50,
          right: 1024,
          bottom: 0,
        }}
        animate={{
          rotate: [1, 10, 30, 50, 70, 90, 100, 5, 4, 3, 2, 1],
        }}
        transition={{repeat: Infinity, duration: 80}}
      >
        <img
          src='/rocket.png'
          style={{
            pointerEvents: 'none',
            width: '10rem',
            height: '10rem',
            objectFit: 'cover',
          }}
        />
      </motion.div>

      <footer className='app__footer'>
        <div className='container app__footer-content'>
          <div className='app__footer-social'>
            <a href=''>
              <svg width='32' height='32' fill='none' viewBox='0 0 24 24'>
                <title>GitHub</title>
                <path
                  fill='currentColor'
                  d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
                ></path>
              </svg>
            </a>

            <a href=''>
              <svg width='32' height='32' fill='none' viewBox='0 0 24 24'>
                <title>Twitter</title>
                <path
                  fill='currentColor'
                  d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'
                ></path>
              </svg>
            </a>

            <a href=''>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <title>Linkedin</title>
                <path
                  fill='currentColor'
                  d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                />
              </svg>
            </a>
          </div>
          <p>
            <small>CO &copy; {new Date().getFullYear()}</small>
          </p>
        </div>
      </footer>
    </motion.div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  let message

  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1 className='subtitle'>
          {caught.status}: {caught.statusText}
        </h1>
        <p className='paragraph'>{message}</p>
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <Document title='Error!'>
      <Layout>
        <div>
          <h1 className='title'>There was an error</h1>
          <p className='paragraph'>{error.message}</p>
          <hr />
          <p className='paragraph'>Opps human! error boundary</p>
        </div>
      </Layout>
    </Document>
  )
}
