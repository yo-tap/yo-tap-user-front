import { motion } from 'framer-motion'
import { FC } from 'react'
import { OActionButton } from '../OActionButton'

type ShareProps = {
  share: () => void
  doneSh: boolean
}

const Component: FC<ShareProps> = ({ share, doneSh }) => {
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
            delay: 0.7,
          },
        },
      }}
      initial="hidden"
      animate={'visible'}
      onAnimationComplete={() => {}}
    >
      <OActionButton
        mt={12}
        earnablePoint={94}
        onClick={share}
        checked={doneSh}
      >
        Share Url to X
      </OActionButton>
    </motion.div>
  )
}

export { Component as Share }
