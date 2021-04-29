/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import tw from "twin.macro";
import { InputBase, TextField } from "@material-ui/core";
import { FormikProps } from "formik";
import clsx from "clsx";

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
  const inputStyle = css`
    ${tw`relative mb-2 rounded bg-white border border-gray-200 shadow-sm flex items-center`}

    .app-input {
      ${tw`font-light text-gray-600 w-full px-3 py-1 w-full`}
    }
    .hint {
      ${tw`absolute right-0 top-0 h-full flex items-center text-xs text-gray-500 px-2`}
    }

    .icon {
      ${tw`text-gray-400 px-2 border-r`}
    }

    &.is-error {
      ${tw`border-red-500`}

      .hint {
        ${tw`text-red-500`}
      }
    }
  `;

  const isError =
    (formik?.touched ? formik?.touched[name] : null) &&
    (Boolean(formik?.errors ? formik?.errors[name] : null) as any);

  return (
    <div css={inputStyle} className={clsx({ "is-error": isError })}>
      {prependIcon && <div className="icon">{prependIcon}</div>}
      <div className="w-full">
        <InputBase
          name={name}
          placeholder={placeholder}
          className="app-input"
          type={type}
          value={formik?.values ? formik?.values[name] : null}
          onChange={formik?.handleChange}
          error={isError}
        />
        {(formik?.touched ? formik?.touched[name] : null) &&
        (formik?.errors ? formik?.errors[name] : null) ? (
          <div className="hint">{formik?.errors[name]}</div>
        ) : null}
      </div>
    </div>
  );
}

export default FormInput;
