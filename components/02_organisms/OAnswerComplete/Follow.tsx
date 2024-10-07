import { motion } from 'framer-motion'
import { FC } from 'react'
import { OActionButton } from '../OActionButton'

type FollowProps = {
  follow: () => void
  doneFw: boolean
}

export const Component: FC<FollowProps> = ({ follow, doneFw }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 24, opacity: 0, scale: 1.25 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.25,
            ease: 'easeOut',
            delay: 0.75,
          },
        },
      }}
      initial="hidden"
      animate={'visible'}
      onAnimationComplete={() => {}}
    >
      <OActionButton
        mt={12}
        checked={doneFw}
        earnablePoint={100}
        onClick={follow}
      >
        Follow X
      </OActionButton>
    </motion.div>
  )
}

export { Component as Follow }
