import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  // add a password field that asks for at least one special character, a number, and an uppercase letter using regular expressions
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});
