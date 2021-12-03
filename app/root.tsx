import {Outlet, useCatch} from 'remix'
import type {LinksFunction} from 'remix'

import Document from './ui/Document'
import Layout from './ui/components/Layout'
import IconFloatAnimated from './ui/components/IconFloatAnimated'

import layoutStyleUrl from '~/styles/layout.css'
import globalStylesUrl from '~/styles/global.css'
import darkStylesUrl from '~/styles/dark.css'

export const links: LinksFunction = () => {
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

export function CatchBoundary() {
  const caught = useCatch()
  let message

  switch (caught.status) {
    case 404:
      message = (
        <p className='text__color-secondary text__base'>
          Oops! Looks like you tried to visit a page that does not exist.
        </p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1 className='text__color-primary text__lg'>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
        <IconFloatAnimated src='/astronaut.png' rotate={[15, 67, 78, 3]} />
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <Document title='Error!'>
      <Layout>
        <div>
          <h1 className='text__lg text__color-primary'>There was an error</h1>
          <p className='text__base text__color-secondary'>{error.message}</p>
          <hr />
          <IconFloatAnimated src='/astronaut.png' rotate={[15, 67, 78, 3]} />
        </div>
      </Layout>
    </Document>
  )
}
