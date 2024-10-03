import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
  liked: boolean
  x: number
  y: number
}

const Component: FC<Props> = ({ liked, x, y }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: liked ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 0, 0.4)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  )
}

export { Component as ERippleEffect }
