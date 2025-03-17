export interface StepOne {
  firstName: string;
  secondName: string;
  age: number;
}

export interface StepTwo {
  addressLine1: string;
  addressLine2: string;
  postcode: string;
  county?: string;
  country: string;
}

export interface StepThree {
  password: string;
  passwordConfirm: string;
}

export const stepType = {
  1: "stepOne",
  2: "stepTwo",
  3: "stepThree",
} as const;
