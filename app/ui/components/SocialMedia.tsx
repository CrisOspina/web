import * as React from 'react'
import {motion} from 'framer-motion'

const SocialMedia: React.FC<Social> = (props: Social) => {
  const {href, path, title, viewBox, fill, height, width} = props

  return (
    <motion.a whileTap={{scale: 0.7}} key={href} href={href} target='_blank'>
      <motion.svg
        initial='hidden'
        animate='show'
        width={width}
        height={height}
        fill={fill}
        viewBox={viewBox}
      >
        <title>{title}</title>
        {path()}
      </motion.svg>
    </motion.a>
  )
}

export default SocialMedia
