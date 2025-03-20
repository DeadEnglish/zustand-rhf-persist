import { Box, Text, TextInput } from "@mrshmllw/smores-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeValidaton } from "../../store/validation";
import useQuoteStore from "../../store/quote.store";
import { FormButtons } from "../../components/FormButtons";

export function FinalSubmit() {
  const { quoteId } = useParams();
  const { getQuoteData, deleteQuote } = useQuoteStore();
  const navigate = useNavigate();

  const defaultValues =
    (getQuoteData(quoteId!, "stepThree") as StepThree) || {};
  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepThreeValidaton),
    defaultValues,
  });

  const { control, handleSubmit } = methods;

  const onSubmit = () => {
    // NOTE: normally we would submit and then delete the quote getQuoteData
    deleteQuote(quoteId!);
    navigate("/");
  };

  return (
    <Box>
      <Text tag="h1" typo="hero" mb="32px">
        now let's set up your account
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Password"
              type="password"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Re-enter password"
              type="password"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <FormButtons />
      </form>
    </Box>
  );
}

export interface StepThree {
  password: string;
  passwordConfirm: string;
}
