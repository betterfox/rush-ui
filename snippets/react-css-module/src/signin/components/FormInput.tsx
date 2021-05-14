import React, { useState } from "react";
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
  const [isFocus, setIsFocus] = useState(false)

  const inputClasses = clsx(styles.formInput, {
    [styles.isError]: isError,
    [styles.isFocus]: isFocus
  })

  return (
    <div className={styles.container}>
      <div className={inputClasses}>
        {prependIcon && <div className={styles.icon}>{prependIcon}</div>}
        <InputBase
          name={name}
          placeholder={placeholder}
          className={styles.input}
          type={type}
          value={formik?.values ? formik?.values[name] : null}
          onChange={formik?.handleChange}
          onFocus={() => { setIsFocus(true) }}
          onBlur={() => { setIsFocus(false) }}
          error={isError}
        />
      </div>
      {(formik?.touched ? formik?.touched[name] : null) &&
        (formik?.errors ? formik?.errors[name] : null) ? (
        <div className={styles.hint}>{formik?.errors[name]}</div>
      ) : null}
    </div>
  );
}

export default FormInput;
