/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field, FormikBag } from "formik";
import FormInput from "./FormInput";
import AppButtonLoading from "./AppLoadingButton";
import { RequestStatus } from "@/enum/request.enum";
import { FiKey, FiUser } from "react-icons/fi";

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
        <div className="mb-6">
          <FormInput
            label={`Email`}
            prependIcon={<FiUser />}
            name="email"
            placeholder="user@mail.com"
            formik={props}
          />
          <FormInput
            label={`Password`}
            prependIcon={<FiKey />}
            name="password"
            type="password"
            placeholder="Password"
            formik={props}
          />
        </div>

        <div className="flex items-center justify-between mb-6">
        </div>
        <AppButtonLoading
          text={`Sign In`}
          isLoading={status === RequestStatus.Loading}
          type="submit"
        />
    </Form>
  );
};

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
