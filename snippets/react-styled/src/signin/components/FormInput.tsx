import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { FormikProps } from "formik";
import styled from "styled-components";
import tw from "twin.macro";

type FormInputProps = {
  label?: string;
  placeholder?: string;
  name: any;
  fieldKey?: any;
  errors?: string[];
  type?: string;
  prefix?: any;
  prependIcon?: any;
  required?: boolean;
  disabled?: boolean;
  formik?: FormikProps<any>;
};

function FormInput({
  placeholder,
  name,
  type,
  prependIcon,
  formik,
}: FormInputProps) {
  const isError =
    (formik?.touched ? formik?.touched[name] : null) &&
    (Boolean(formik?.errors ? formik?.errors[name] : null) as any);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container>
    <InputContainer isError={isError} isFocus={isFocus}>
      {prependIcon && <Icon>{prependIcon}</Icon>}
      <StyledInput
        name={name}
        placeholder={placeholder}
        type={type}
        value={formik?.values ? formik?.values[name] : null}
        onChange={formik?.handleChange}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        error={isError}
      />
      </InputContainer>
      {(formik?.touched ? formik?.touched[name] : null) &&
      (formik?.errors ? formik?.errors[name] : null) ? (
        <Hint>{formik?.errors[name]}</Hint>
      ) : null}
    </Container>
  );
}

const Hint = styled.div`
  ${tw`text-error text-sm`}
`;
const Icon = styled.div`
  ${tw`text-on-input pl-3 text-lg border-surface opacity-50`}
`;
const Container = styled.div`
  ${tw`mb-2`}
`;
const StyledInput = styled(InputBase)`
  ${tw`font-light text-on-input px-3 py-0 w-full`}
`;

interface InputContainerProps {
  isError: boolean;
  isFocus: boolean;
}
const InputContainer = styled.div<InputContainerProps>`
  ${tw`relative rounded bg-input border border-outline shadow-sm flex items-center p-0`}
  height: var(--input-height);

  ${(props) => props.isFocus && tw`shadow-lg border-primary`}
  ${(props) => props.isError && tw`border-error`}
`;

export default FormInput;
