import * as React from 'react'
import {motion} from 'framer-motion'

type Props = {
  duration?: number
  width?: string
  height?: string
  src: string
  rotate?: number[]
}

const IconFloatAnimated: React.FC<Props> = (props: Props) => {
  const {
    duration = 80,
    width = '10rem',
    height = '10rem',
    src,
    rotate = [1, 10, 30, 50, 70, 90, 100, 5, 4, 3, 2, 1],
  } = props

  return (
    <motion.div
      className='app__icon-animated-img'
      drag
      dragConstraints={{
        top: -500,
        left: -50,
        right: 100,
        bottom: 0,
      }}
      animate={{rotate}}
      transition={{repeat: Infinity, duration}}
    >
      <img
        src={src}
        style={{
          pointerEvents: 'none',
          width,
          height,
          objectFit: 'cover',
        }}
      />
    </motion.div>
  )
}

export default IconFloatAnimated
