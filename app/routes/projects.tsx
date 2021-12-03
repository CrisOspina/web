import * as React from 'react'
import {motion} from 'framer-motion'
import {MetaFunction} from 'remix'
import {projects} from '../info'

export const meta: MetaFunction = () => {
  return {
    title: 'Projects',
    description: 'My projects',
    keywords: 'Remix, web, javascript, css, react, apollo, redux, go, php',
  }
}

const Projects: React.FC = () => {
  return (
    <section className='container'>
      <motion.h2
        initial='hidden'
        animate='show'
        className='text__color-primary text__xl'
      >
        Projects
      </motion.h2>
      <p className='text__color-secondary text__base'>
        Feel free to take a look at my projects 🚀
      </p>
      <article className='container__card'>
        {projects.map((project: Project) => (
          <motion.section
            className='card'
            animate={{y: 20}}
            transition={{type: 'spring', stiffness: 100}}
            whileTap={{scale: 0.9}}
            key={project.href}
          >
            <a target='_blank' href={project.href}>
              <p className='text__color-primary text__base text__center px-1'>
                <strong>{project.name}</strong>
              </p>

              <p className='text__color-tertiary text__sm text__center px-1'>
                {project.description}
              </p>

              <hr />

              <div className='space__around w-full my-2 px-1'>
                {project.tools?.map((tool: string) => (
                  <small className='badge'>#{tool.toLowerCase()}</small>
                ))}
              </div>
            </a>
          </motion.section>
        ))}
      </article>
      <article className='space__center container__button my-3'>
        <motion.button
          className='button my-2'
          onClick={() => window.open('https://github.com/CrisOspina', '_blank')}
          whileTap={{scale: 0.7}}
        >
          See more...
        </motion.button>
      </article>
    </section>
  )
}

export default Projects
