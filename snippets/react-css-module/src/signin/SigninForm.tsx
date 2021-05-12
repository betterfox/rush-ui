import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import FormInput from "./components/FormInput";
import AppButtonLoading from "./components/AppLoadingButton";
import { FiKey, FiUser } from "react-icons/fi";
import { RequestStatus } from "./enum/request.enum";
import styles from './SigninForm.module.scss';

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
        <div className={styles.formContainer}>
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
        </div>

        <div className={styles.additionalContainer}>
          <a className={styles.link} href="/forgot-password">Forgot Password?</a>
          <a className={styles.link} href="/register">Create Account</a>
        </div>
        <AppButtonLoading
          text="Sign In"
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