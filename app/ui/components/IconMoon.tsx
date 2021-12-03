import {motion} from 'framer-motion'

const Moon: React.FC = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <motion.path
        fill='currentColor'
        whileHover={{scaleX: 800, transition: {duration: 1.9}}}
        d='M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm2 0c0-5.292 4.113-9.612 9.315-9.965C8.11 4.189 6 7.848 6 12s2.11 7.811 5.315 9.965C6.113 21.612 2 17.292 2 12z'
      ></motion.path>
    </svg>
  )
}

export default Moon
