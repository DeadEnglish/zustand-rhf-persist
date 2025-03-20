import { z } from "zod";

export const stepOneValidation = z.object({
  firstName: z.string().min(1, { message: "please enter a valid first name" }),
  secondName: z
    .string()
    .min(1, { message: "please enter a valid second name" }),
  age: z.coerce.number().min(1, { message: "please enter a valid age" }),
});

export const stepTwoValidation = z.object({
  addressLine1: z.string(),
  addressLine2: z.string().optional(),
  postcode: z.string(),
  county: z.string(),
  country: z.string(),
});

export const stepThreeValidaton = z.object({
  password: z.string(),
  passwordConfirm: z.string(),
});

export type StepOne = z.infer<typeof stepOneValidation>;
export type StepTwo = z.infer<typeof stepTwoValidation>;
export type StepThree = z.infer<typeof stepThreeValidaton>;
