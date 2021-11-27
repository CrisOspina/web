import type {MetaFunction, LinksFunction} from 'remix'
import {motion} from 'framer-motion'
import styleHome from '../styles/home.css'

export let links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styleHome}]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Hi human 👋',
    description: 'Welcome human!',
  }
}

export default function Index() {
  return (
    <section>
      <motion.h2 className='subtitle' initial='hidden' animate='show'>
        Hello 👋
      </motion.h2>
      <motion.h1
        className='title'
        animate={{y: 10}}
        transition={{type: 'spring', stiffness: 100}}
      >
        I'm a <strong>software developer</strong>
      </motion.h1>
      <motion.p className='paragraph' animate={{y: 5}}>
        I like to solve problems through technology
      </motion.p>
      <div className='container__button'>
        <motion.button className='button' whileTap={{scale: 0.9}}>
          ..npm run dev..
        </motion.button>
      </div>
    </section>
  )
}
