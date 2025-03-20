import { Box, Text, TextInput } from "@mrshmllw/smores-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useFormStore from "../../store/form.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeValidaton } from "../../store/validation";
import { ContinueButtons } from "../../components/ContinueButtons";

export function FinalSubmit() {
  const { stepThree, setStepData } = useFormStore();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: zodResolver(stepThreeValidaton),
    defaultValues: stepThree || {},
  });

  const { control, handleSubmit, getValues, formState } = methods;

  const { errors } = formState;
  console.log({ errors, values: getValues() });

  const onSubmit = (data: StepThree) => {
    console.log("submitting");
    setStepData("stepThree", data);
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
        <ContinueButtons />
      </form>
    </Box>
  );
}

export interface StepThree {
  password: string;
  passwordConfirm: string;
}
