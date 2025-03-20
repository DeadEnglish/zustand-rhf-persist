import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { StepOne, StepThree, StepTwo } from "./validation";

type StepName = "stepOne" | "stepTwo" | "stepThree";

interface FormState {
  stepOne: StepOne | null;
  stepTwo: StepTwo | null;
  stepThree: StepThree | null;
  setStepData: (
    stepName: StepName,
    stepData: StepOne | StepTwo | StepThree,
  ) => void;
}

// NOTE: Whilst htis is a very basic implementation with everything on one store, we could split this out into multiple stores
const useFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
        setStepData: (stepName, stepData) =>
          set(() => ({ [stepName]: stepData })),
      }),
      {
        // NOTE: we can version stores and usse `migrate` to version changes
        version: 1,
        name: "form-store",
      },
    ),
  ),
);

export default useFormStore;
