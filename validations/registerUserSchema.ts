import { z } from 'zod'

const schema = {
  email: z.string().email(),
}

export { schema as registerUserSchema }
