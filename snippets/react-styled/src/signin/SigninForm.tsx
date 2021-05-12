import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import FormInput from "./components/FormInput";
import AppButtonLoading from "./components/AppLoadingButton";
import { FiKey, FiUser } from "react-icons/fi";
import { RequestStatus } from "./enum/request.enum";
import styled from 'styled-components';
import tw from 'twin.macro';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message?: string;
  status?: RequestStatus;
  onSubmit?: Function
}

interface MyFormProps {
  initialEmail?: string;
  message?: string;
  status?: RequestStatus;
  onSubmit?: Function
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message, status } = props;
  return (
    <Form onSubmit={props.handleSubmit}>
      <FormBody>
        <FormInput
          label="Email"
          prependIcon={<FiUser />}
          name="email"
          placeholder="Create Account"
          formik={props}
        />
        <FormInput
          label="Password"
          prependIcon={<FiKey />}
          name="password"
          type="password"
          placeholder="Password"
          formik={props}
        />
      </FormBody>
      <FormLinkContainer>
        <FormLink href="/forgot-password">Forgot Password?</FormLink>
        <FormLink href="/register">Create Account</FormLink>
      </FormLinkContainer>
      <FormFooter>
        <AppButtonLoading
          text="Sign In"
          isLoading={status === RequestStatus.Loading}
          type="submit"
        />
      </FormFooter>
    </Form>
  );
};

const FormBody = styled.div`
  ${tw`mb-3`}
`

const FormFooter = styled.div`
`
const FormLinkContainer = styled.div`
  ${tw`flex items-center justify-between mb-6 py-0`}
`

const FormLink = styled.a`
  ${tw`text-sm text-on-surface opacity-50`}
  &:hover {
    ${tw`opacity-100`}
  }
`

const SigninForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  },

  handleSubmit: (values, { props }: FormikBag<any, FormValues>) => {
    props.onSubmit(values)
  },
})(InnerForm);

export default SigninForm;
