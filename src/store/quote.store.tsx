import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Quote, QuoteStore } from "./quote.types";

const emptyStepData: Quote = {
  stepOne: undefined,
  stepTwo: undefined,
  stepThree: undefined,
};

// NOTE: Whilst this is a very basic implementation with everything on one store, we could split this out into multiple stores
const useQuoteStore = create<QuoteStore>()(
  devtools(
    persist(
      (set, get) => ({
        quotes: {},
        getQuoteData: (quoteId, stepName) => {
          const quoteData = get().quotes[quoteId];

          if (!quoteData) {
            throw new Error(`Quote with id ${quoteId} not found`);
          }
          if (!stepName) {
            return quoteData;
          }
          return quoteData[stepName];
        },
        createQuote: (quoteId) =>
          set(({ quotes }) => ({
            quotes: { ...quotes, [quoteId]: emptyStepData },
          })),
        updateQuoteData: (quoteId, step, stepData) =>
          set(({ quotes }) => ({
            quotes: {
              ...quotes,
              [quoteId]: { ...quotes[quoteId], [step]: stepData },
            },
          })),
        deleteQuote: (quoteId) => {
          const { [quoteId]: _, ...quotes } = get().quotes;
          set({ quotes });
        },
      }),
      {
        // NOTE: we can version stores and usse `migrate` to version changes
        version: 1,
        name: "quote_store",
      },
    ),
  ),
);

export default useQuoteStore;
