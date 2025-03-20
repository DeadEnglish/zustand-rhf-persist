import { Box, NumberInput, Text, TextInput } from "@mrshmllw/smores-react";
import { ContinueButtons } from "../../components/ContinueButtons";
import { Controller, useForm } from "react-hook-form";
import useFormStore from "../../store/form.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepOne, stepOneValidation } from "../../store/validation";
import { useNavigate } from "react-router";

export function Name() {
  const { stepOne, setStepData } = useFormStore();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepOneValidation),
    defaultValues: stepOne || {},
  });

  const { control, handleSubmit, getValues, formState } = methods;

  const { errors } = formState;
  console.log({ errors, values: getValues() });

  const onSubmit = (data: StepOne) => {
    console.log("submitting");
    setStepData("stepOne", data);
    navigate("/address");
  };
  return (
    <Box>
      <Text tag="h1" typo="hero" mb="32px">
        Let&apos;s get a few details
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="First name"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="secondName"
          render={({ field, fieldState }) => (
            <TextInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value}
              onInputChange={field.onChange}
              placeholder="Second name"
              error={fieldState.invalid}
              errorMsg={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="age"
          render={({ field, fieldState }) => (
            <NumberInput
              mb="16px"
              ref={field.ref}
              name={field.name}
              value={field.value ? field.value.toString() : ""}
              onInputChange={field.onChange}
              placeholder="Age"
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
