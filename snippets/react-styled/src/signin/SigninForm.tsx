import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import * as Yup from 'yup';
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
  formStatus?: RequestStatus;
  onSubmit?: Function
}

interface SigninFormProps {
  initialEmail?: string;
  formStatus?: RequestStatus;
  onSubmit?: Function
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, formStatus } = props;
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
          isLoading={formStatus === RequestStatus.Loading}
          type="submit"
        />
      </FormFooter>
    </Form>
  );
};


const SigninSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const SigninForm = withFormik<SigninFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: ""
    };
  },
  validationSchema: SigninSchema,
  handleSubmit: (values, { props }: FormikBag<any, FormValues>) => {
    props.onSubmit(values)
  },
})(InnerForm);


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
export default SigninForm;
