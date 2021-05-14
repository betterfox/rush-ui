import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import * as Yup from 'yup';
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
  formStatus?: RequestStatus;
  onSubmit?: Function
}

interface MyFormProps {
  initialEmail?: string;
  formStatus?: RequestStatus;
  onSubmit?: Function
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, formStatus } = props;
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
        isLoading={formStatus === RequestStatus.Loading}
        type="submit"
      />
    </Form>
  );
};

const SigninSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const SigninForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  validationSchema: SigninSchema,

  handleSubmit: (values, { props }: FormikBag<any, FormValues>) => {
    props.onSubmit(values)
  },
})(InnerForm);

export default SigninForm;
