import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
  x: number
  y: number
  color: string
}

const Component: FC<Props> = ({ x, y, color = 'red' }) => {
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
        background: color,
        opacity: 0.5,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  )
}

export { Component as ERippleEffect }
