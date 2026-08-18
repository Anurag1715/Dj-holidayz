'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormFields from '../../../models/formfields.json';

const CustomPhoneInput = ({
    name,
    parent,
    control,
    styles,
    label = true,
    required = true,
    disabled = false,
}) => {
    const fieldMeta = parent ? FormFields[parent]?.[name] : FormFields[name];

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <div className={`${styles?.wd_input_wrap || ''} ${styles?.phone_input_wrap || ''} ${error ? styles?.error || '' : ''}`}>
                    {label && (
                        <div className={styles?.label_wrapper}>
                            <label className={styles?.FormLabel} htmlFor={name}>
                                {fieldMeta?.label}
                            </label>
                        </div>
                    )}
                    <div className={styles?.phone_container}>
                        <PhoneInput
                            country={'in'}
                            enableSearch
                            searchPlaceholder="Search country..."
                            value={value || ''}
                            onChange={(phone, countryData, e, formattedValue) => {
                                onChange(formattedValue || phone);
                            }}
                            onBlur={onBlur}
                            disabled={disabled}
                            inputProps={{
                                name: name,
                                id: name,
                                required: required,
                            }}
                            containerClass={`${styles?.react_phone_container || ''}`}
                            inputClass={`${styles?.wd_input || ''} ${styles?.react_phone_input || ''}`}
                            buttonClass={`${styles?.react_phone_button || ''}`}
                            dropdownClass={`${styles?.react_phone_dropdown || ''}`}
                        />
                    </div>
                    {error && <p className={styles?.error_msg}>{error.message}</p>}
                </div>
            )}
        />
    );
};

export default CustomPhoneInput;
