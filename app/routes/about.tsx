import {useLoaderData} from '@remix-run/react'
import {LoaderFunction, MetaFunction} from '@remix-run/node'
import {motion} from 'framer-motion'

import ToolImages from '~/ui/components/ToolImages'
import {tools} from '~/info'

export const meta: MetaFunction = () => {
  return {
    title: 'About',
    description: 'Hello, I am Cristian Ospina, I am software developer',
  }
}

export const loader: LoaderFunction = () =>
  'https://avatars.githubusercontent.com/u/38017835?v=4'

const About: React.FC = () => {
  const avatar = useLoaderData()

  return (
    <section className='container'>
      <article className='space__between'>
        <div>
          <motion.h2
            initial='hidden'
            animate='show'
            className='text__color-primary text__xl'
          >
            About me
          </motion.h2>

          <motion.h1
            initial='hidden'
            animate='show'
            className='text__color-secondary text__base'
          >
            Hello, I'm Cristian Ospina
          </motion.h1>
        </div>
        <div className='space__center'>
          <motion.img
            className='rounded__full'
            animate={{y: 20}}
            transition={{type: 'spring', stiffness: 100}}
            src={avatar ?? ''}
            alt='Profile'
          />
        </div>
      </article>

      <motion.p className='text__color-secondary text__base'>
        I'm a software developer from Colombia. I am passionate about
        technology, especially that related to web development, I like to be
        constantly learning, using the best practices shared by the community,
        making a very good code, always thinking about its scalability and thus
        being able to improve the quality of the products
      </motion.p>

      <motion.p className='text__color-secondary text__base'>
        I am attracted to the challenges and I try to solve them causing a good
        impact.
      </motion.p>

      <motion.h2 className='text__color-primary text__base'>
        📌 I help founders add value to society by crafting software, using:
      </motion.h2>

      <div className='app__container-flex m-4'>
        {tools.map((tool: Image) => (
          <ToolImages key={tool.src} {...tool} />
        ))}
      </div>
    </section>
  )
}

export default About
