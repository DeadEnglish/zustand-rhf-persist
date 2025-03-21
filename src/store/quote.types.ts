export type StepName = "stepOne" | "stepTwo" | "stepThree";
import { StepOne, StepThree, StepTwo } from "./validation";

export interface Quote {
  stepOne: StepOne | undefined;
  stepTwo: StepTwo | undefined;
  stepThree: StepThree | undefined;
}

export type CreateQuote = (quoteId: string) => void;

export type UpdateQuoteData = (
  quoteId: string,
  step: StepName,
  stepData: StepOne | StepTwo | StepThree,
) => void;

export interface QuoteStore {
  quotes: {
    [quoteId: string]: Quote;
  };
  createQuote: CreateQuote;
  getQuoteData: (
    quoteId: string,
    stepName?: StepName,
  ) => Quote | Quote[StepName];
  deleteQuote: (quoteId: string) => void;
  updateQuoteData: UpdateQuoteData;
}
