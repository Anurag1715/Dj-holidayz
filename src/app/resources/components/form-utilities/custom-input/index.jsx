"use client";
/**React imports */
import React, { useEffect } from "react";

/**Libraries */
import { Controller } from "react-hook-form";

/**Local imports */
import FormFields from "../../../models/formfields.json";

const CustomInput = ({
  name,
  parent,
  control,
  type,
  styles,
  icon,
  wrapper = true,
  label = true,
  asterisk = false,
  inputWrapper = false,
  defaultValue = "",
  disabled = false,
  required = true,
  labelSuffix = null,
}) => {
  const FieldName = parent ? FormFields[parent][name] : FormFields[name];
  const Wrapper = wrapper ? "div" : React.Fragment;
  const InputWrapper = inputWrapper ? "div" : React.Fragment;
  const InputType = type === "textarea" ? "textarea" : "input";
  const Icon = icon;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <Wrapper
              {...(wrapper && {
                className: `${styles.wd_input_wrap}  ${error ? styles.error : ""}`,
              })}
            >
              {label && (
                <div className={styles.label_wrapper}>
                  <label className={styles.FormLabel} htmlFor={name}>
                    {FieldName?.label}

                    {asterisk && <span className={styles.asterisk}>*</span>}
                  </label>
                  {labelSuffix}
                </div>
              )}
              <InputWrapper
                {...(inputWrapper && { className: `${styles.InputWrapper}` })}
              >
                {Icon && <Icon className={styles.aks_icon} />}
                <InputType
                  type={type}
                  className={`${styles.wd_input} ${disabled ? styles.tp_disabled : ""}`}
                  placeholder={FieldName?.placeholder}
                  disabled={disabled}
                  {...field}
                  // FIX BELOW: Ensure value is never null/undefined
                  value={field.value === " " ? "" : (field.value ?? "")}
                />
              </InputWrapper>
              {error && <p className={styles.error_msg}>{error.message}</p>}
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default CustomInput;
