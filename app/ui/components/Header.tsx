import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
    },
  },
}

const item = {
  hidden: {opacity: 0},
  show: {opacity: 1},
}

const variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
}

const routes: Route[] = [
  {
    name: 'About',
    to: '/about',
    title: 'About',
  },
  {
    name: 'Projects',
    to: '/projects',
    title: 'Projects',
  },
  {
    name: 'Blog',
    to: '/blog',
    title: 'Blog',
  },
]

const Header: React.FC = () => {
  return (
    <header className='app__header'>
      <section className='container app__header-content'>
        <motion.span variants={item}>
          <NavLink
            className={({isActive}) =>
              isActive ? 'app__header-nav-active' : ''
            }
            to='/'
            title='Home'
          >
            Cristian Ospina
          </NavLink>
        </motion.span>

        <motion.nav
          aria-label='Main navigation'
          initial='hidden'
          animate='visible'
          transition={{ease: 'easeOut', duration: 0.4}}
          variants={variants}
          className='app__header-nav'
        >
          <motion.ul variants={container} initial='hidden' animate='show'>
            {routes.map((route: Route) => (
              <motion.li key={route.to} variants={item}>
                <NavLink
                  className={({isActive}) =>
                    isActive ? 'app__header-nav-active ' : ''
                  }
                  title={route.title}
                  to={route.to}
                  arial-label={route.title}
                >
                  {route.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </section>
    </header>
  )
}

export default Header
