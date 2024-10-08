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
        onClick={async () => {
          await share()
          window.open(
            'twitter://post?message=%E3%83%9D%E3%82%A4%E6%B4%BB%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA(%E5%AE%9F%E9%A8%93%E4%B8%AD)%20%23YoTap%20https://yotap.vercel.app/surveys/test-ja'
          )
        }}
        checked={doneSh}
      >
        Share Url to X
      </OActionButton>
    </motion.div>
  )
}

export { Component as Share }
