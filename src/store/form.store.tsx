import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { StepOne, StepThree, StepTwo } from "./form.types";

interface FormState {
  stepOne: StepOne | null;
  stepTwo: StepTwo | null;
  stepThree: StepThree | null;
}

const useFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
      }),
      {
        name: "bear-storage",
      },
    ),
  ),
);

export default useFormStore;
