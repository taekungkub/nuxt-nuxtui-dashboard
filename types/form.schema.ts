import { z } from "zod"

export const SigninSchema = z.object({
  email: z.string().nonempty({ message: "Email cant empty" }),
  password: z.string().nonempty({ message: "Password cant empty" }),
})
