import { useNavigate, useParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepTwo, stepTwoValidation } from "../../store/validation";
import { Box, Text, TextInput } from "@mrshmllw/smores-react";
import useQuoteStore from "../../store/quote.store";
import { FormButtons } from "../../components/FormButtons";

export function Address() {
  const { quoteId } = useParams();
  const { getQuoteData, updateQuoteData } = useQuoteStore();
  const navigate = useNavigate();

  const defaultValues = (getQuoteData(quoteId!, "stepTwo") as StepTwo) || {};
  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepTwoValidation),
    defaultValues,
  });

  const { control, handleSubmit } = methods;

  const onSubmit = (data: StepTwo) => {
    updateQuoteData(quoteId!, "stepTwo", data);
    navigate(`/quote/${quoteId}/final-submit`);
  };
  return (
    <Box>
      <Text tag="h1" typo="hero" mb="32px">
        what about where you live?
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="addressLine1"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Address Line 1"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="addressLine2"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value || ""}
              onInputChange={field.onChange}
              placeholder="addressLine2"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="postcode"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Postcode"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="county"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="County"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Country"
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
