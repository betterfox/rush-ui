import React from "react";
import { InputBase } from "@material-ui/core";
import { FormikProps } from "formik";
import clsx from "clsx";
import styles from './FormInput.module.scss';

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
  label,
  placeholder,
  name,
  type,
  required,
  prefix,
  prependIcon,
  disabled,
  errors = [],
  fieldKey,
  formik,
}: FormInputProps) {
  const isError =
    (formik?.touched ? formik?.touched[name] : null) &&
    (Boolean(formik?.errors ? formik?.errors[name] : null) as any);

  const inputClasses = clsx(styles.formInput,{ [styles.isError]: isError })

  return (
    <div className={inputClasses}>
      {prependIcon && <div className={styles.icon}>{prependIcon}</div>}
      <div className={styles.inputContainer}>
        <InputBase
          name={name}
          placeholder={placeholder}
          className={styles.input}
          type={type}
          value={formik?.values ? formik?.values[name] : null}
          onChange={formik?.handleChange}
          error={isError}
        />
        {(formik?.touched ? formik?.touched[name] : null) &&
        (formik?.errors ? formik?.errors[name] : null) ? (
          <div className={styles.hint}>{formik?.errors[name]}</div>
        ) : null}
      </div>
    </div>
  );
}

export default FormInput;
