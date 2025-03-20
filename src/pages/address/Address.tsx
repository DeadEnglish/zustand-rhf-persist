import { useNavigate } from "react-router";
import useFormStore from "../../store/form.store";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepTwo, stepTwoValidation } from "../../store/validation";
import { Box, Text, TextInput } from "@mrshmllw/smores-react";
import { ContinueButtons } from "../../components/ContinueButtons";

export function Address() {
  const { stepTwo, setStepData } = useFormStore();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepTwoValidation),
    defaultValues: stepTwo || {},
  });

  const { control, handleSubmit, getValues, formState } = methods;

  const { errors } = formState;
  console.log({ errors, values: getValues() });

  const onSubmit = (data: StepTwo) => {
    console.log("submitting");
    setStepData("stepTwo", data);
    navigate("/final-submit");
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

        <ContinueButtons />
      </form>
    </Box>
  );
}
