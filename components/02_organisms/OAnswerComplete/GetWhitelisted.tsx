import { registerUserSchema } from '@/validations/registerUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { OActionButton } from '../OActionButton'

type GetWhitelistedProps = {
  getWhitelisted: () => void
  doneGw: boolean
}

const schema = z.object(registerUserSchema)

export const Component: FC<GetWhitelistedProps> = ({
  doneGw,
  getWhitelisted,
}) => {
  const [opened, { open, close }] = useDisclosure(false)
  //   const [isSubmitting, setIsSubmitting] = useState(false)

  const methods = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    shouldFocusError: true,
  })

  //   const sendOnSubmit = methods.handleSubmit(async (data) => {
  //     setIsSubmitting(true)

  //     console.log('ok!!!')

  //     const dto = {
  //       email: data.email,
  //     }

  //     try {
  //       // await upsertUser(dto)

  //       await fetch('/api/whitelist', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(dto),
  //       })

  //       setTimeout(async () => {
  //         setIsSubmitting(false)
  //       }, 1000)
  //     } catch (error) {
  //       console.error(error)
  //       alert('エラーが発生しました')
  //     } finally {
  //       // setIsSubmitting(false)
  //     }
  //   })

  console.log(methods.formState.errors)
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close()
          getWhitelisted()
        }}
        title="Register whitelist"
        centered
      >
        Underconstruction
        {/* <form onSubmit={sendOnSubmit}>
          <TextInput
            label="Email"
            placeholder="abcd@example.com"
            {...methods.register('email')}
            error={methods.formState.errors['email']?.message?.toString()}
          />
          <Button mt={24} type="submit" loading={isSubmitting}>
            {isSubmitting ? <Loader /> : 'Submit'}
          </Button>
        </form> */}
      </Modal>
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
              delay: 0.65,
            },
          },
        }}
        initial="hidden"
        animate={'visible'}
      >
        <OActionButton
          earnablePoint={212}
          onClick={() => {
            open()
          }}
          checked={doneGw}
        >
          Get whitelisted!
        </OActionButton>
      </motion.div>
    </>
  )
}

export { Component as GetWhitelisted }
