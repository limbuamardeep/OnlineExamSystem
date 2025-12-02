import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().trim().min(2, { message: "First name is required" }),
    lastName: z.string().trim().optional(),
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpInput = z.infer<typeof signUpSchema>;