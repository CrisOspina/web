import type {MetaFunction} from 'remix'
import {Link} from 'remix'
import {motion} from 'framer-motion'

export const meta: MetaFunction = () => {
  return {
    title: 'Hi, how are you? 👋',
    description: 'Welcome',
    keywords:
      'Remix, web, portfolio, javascript, react, developer, colombia, technology, quality products',
    'twitter:image': 'https://twitter.com/CrisOspina523/photo',
    'twitter:title': 'Cristian Ospina',
  }
}

const Index: React.FC = () => {
  return (
    <section className='container'>
      <motion.h2
        className='text__xl text__color-secondary m-0'
        initial='hidden'
        animate='show'
      >
        Hello 👋
      </motion.h2>

      <motion.h1
        className='text__xxl text__color-primary leading-4 m-0'
        animate={{y: 10}}
        transition={{type: 'spring', stiffness: 100}}
      >
        I'm a Software Developer
      </motion.h1>

      <motion.p className='text__base text__color-secondary' animate={{y: 5}}>
        and a passionate
        <span className='text__color-primary'> Javascript developer</span> from
        Colombia who loves to solve problems through technology and to build and
        deliver quality products
      </motion.p>

      <div className='space__center my-3'>
        <Link to='/about'>
          <motion.button className='button' whileTap={{scale: 0.9}}>
            ..npm run dev..
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default Index
