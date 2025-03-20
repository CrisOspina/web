import * as React from 'react'
import type {MetaFunction} from '@remix-run/node'

export const meta: MetaFunction = () => {
  return {
    title: 'Blog',
    description: 'Coming soon',
  }
}

const Blog: React.FC = () => {
  return (
    <>
      <h1 className='text__color-primary text__lg'>Coming soon 🔨</h1>
      <iframe
        className='rounded__full'
        src='https://giphy.com/embed/xZsLh7B3KMMyUptD9D'
        width='480'
        height='270'
        frameBorder='0'
      ></iframe>
    </>
  )
}

export default Blog
