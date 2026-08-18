"use client";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

import CustomInput from "../../form-utilities/custom-input";
import CustomSelect from "../../form-utilities/custom-select";
import CustomDateTimePicker from "../../form-utilities/customdatepicker";
import CustomPhoneInput from "../../form-utilities/custom-phone-input";
import FileDrag from "../../form-utilities/file-drag";

import { VisaEnquiryFormBuilder } from "../../../utils/formbuilder";

import CrossIcon from "@/Icons/cross-small.svg";
import styles from "./visa-enquiry.module.scss";

// Validation Schema defined directly inside the form component
const VisaEnquirySchema = yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters."),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters."),
  residence_country: yup.string().required("Country of residence is required."),
  nationality: yup.string().required("Nationality is required."),
  destination_country: yup
    .string()
    .required("Destination country is required."),
  customer_type: yup.string().required("Customer type is required."),
  visa_type: yup.string().required("Type of visa is required."),
  travel_date: yup.mixed().required("Tentative travel date is required."),
  phone: yup
    .string()
    .required("Contact number is required.")
    .min(6, "Please enter a valid phone number"),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
  adults: yup
    .number()
    .typeError("Number of adults is required.")
    .min(1, "Minimum 1 adult is required.")
    .required("Number of adults is required."),
  children: yup.number().min(0).default(0),
  description: yup.string().nullable(),
  attachment: yup.mixed().nullable(),
});

const VisaEnquiryForm = ({ isOpen, onClose, defaultOption }) => {
  const [mounted, setMounted] = useState(typeof window !== "undefined");
  const popupRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(VisaEnquirySchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      residence_country: "",
      nationality: "",
      destination_country: "",
      customer_type: "",
      visa_type: "",
      travel_date: "",
      phone: "",
      email: "",
      adults: 1,
      children: 0,
      description: "",
      attachment: null,
    },
  });

  const adultsCount = watch("adults") || 1;
  const childrenCount = watch("children") || 0;

  // Prefill fields when defaultOption changes or modal opens
  useEffect(() => {
    if (isOpen && defaultOption) {
      if (defaultOption.countryName) {
        setValue("destination_country", defaultOption.countryName);
      }
      setValue("visa_type", "Tourist visa");
    }
  }, [isOpen, defaultOption, setValue]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const fields = VisaEnquiryFormBuilder(control, styles, setValue);

  const onSubmit = (data) => {
    console.log("Visa Enquiry Submitted Data:", data);
    toast.success("Visa enquiry submitted successfully!");
    reset();
    onClose();
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "textarea":
        return (
          <div
            className={`${styles.wd_input_wrap} ${field.full ? styles.full_width : ""}`}
            key={field.name}
          >
            <CustomInput {...field} styles={styles} />
          </div>
        );
      case "select":
        return (
          <div
            className={`${styles.wd_input_wrap} ${field.full ? styles.full_width : ""}`}
            key={field.name}
          >
            <CustomSelect {...field} styles={styles} />
          </div>
        );
      case "datepicker":
        return (
          <div
            className={`${styles.wd_input_wrap} ${field.full ? styles.full_width : ""}`}
            key={field.name}
          >
            <CustomDateTimePicker {...field} styles={styles} />
          </div>
        );
      case "phone":
        return (
          <div
            className={`${styles.wd_input_wrap} ${field.full ? styles.full_width : ""}`}
            key={field.name}
          >
            <CustomPhoneInput {...field} styles={styles} />
          </div>
        );
      case "file":
        return (
          <div
            className={`${styles.wd_input_wrap} ${field.full ? styles.full_width : ""}`}
            key={field.name}
          >
            <FileDrag
              {...field}
              styles={styles}
              control={control}
              setValue={setValue}
              clearErrors={clearErrors}
              watch={watch}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return createPortal(
    <div className={styles.enquiry_overlay} onClick={onClose}>
      <div
        className={styles.enquiry_container}
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.enquiry_header}>
          <h2 className={styles.enquiry_title}>Visa Enquiry Form</h2>
          <div className={styles.enquiry_close} onClick={onClose}>
            <CrossIcon />
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.enquiry_form}>
          {/* Top Row: Personal, Travel, Contact info cards */}
          <div className={styles.cards_grid}>
            {/* Personal Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Personal Information</h3>
              <div className={styles.fields_grid}>
                {fields.personalInfo.map((field) => renderField(field))}
              </div>
            </div>

            {/* Travel Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Travel Information</h3>
              <div className={styles.fields_grid}>
                {fields.travelInfo.map((field) => renderField(field))}
              </div>
            </div>

            {/* Contact Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Contact Information</h3>
              <div className={styles.fields_grid}>
                {fields.contactInfo.map((field) => renderField(field))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Passenger details & Additional info */}
          <div className={styles.bottom_grid}>
            {/* Passenger Details */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Passenger Details</h3>
              <div className={styles.passenger_counters}>
                {/* Number of Adults */}
                <div className={styles.counter_group}>
                  <label className={styles.counter_label}>
                    Number of Adults<span className={styles.asterisk}>*</span>
                  </label>
                  <div className={styles.counter_controls}>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      disabled={adultsCount <= 1}
                      onClick={() =>
                        setValue("adults", Math.max(1, adultsCount - 1))
                      }
                    >
                      -
                    </button>
                    <span className={styles.counter_value}>{adultsCount}</span>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      onClick={() => setValue("adults", adultsCount + 1)}
                    >
                      +
                    </button>
                  </div>
                  {errors.adults && (
                    <p className={styles.error_msg}>{errors.adults.message}</p>
                  )}
                </div>

                {/* Number of Children */}
                <div className={styles.counter_group}>
                  <label className={styles.counter_label}>
                    Number of Children
                  </label>
                  <div className={styles.counter_controls}>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      disabled={childrenCount <= 0}
                      onClick={() =>
                        setValue("children", Math.max(0, childrenCount - 1))
                      }
                    >
                      -
                    </button>
                    <span className={styles.counter_value}>
                      {childrenCount}
                    </span>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      onClick={() => setValue("children", childrenCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Additional Information</h3>
              <div className={styles.fields_grid}>
                {fields.additionalInfo.map((field) => renderField(field))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className={styles.enquiry_footer}>
            <button
              type="button"
              className={styles.cancel_btn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submit_btn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default VisaEnquiryForm;
