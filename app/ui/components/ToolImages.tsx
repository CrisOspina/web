import {motion} from 'framer-motion'

const ToolImages: React.FC<Image> = (props: Image) => {
  const {src, alt} = props

  return (
    <motion.img
      className='size__img-md'
      animate={{y: 10}}
      transition={{type: 'spring', stiffness: 100}}
      whileHover={{scale: 1.2, transition: {duration: 0.3}}}
      src={src}
      alt={alt}
    />
  )
}

export default ToolImages
