"use client";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";

import CustomInput from "@/Components/form-utilities/custom-input";
import CustomSelect from "@/Components/form-utilities/custom-select";
import CustomDateTimePicker from "@/Components/form-utilities/customdatepicker";
import CustomPhoneInput from "@/Components/form-utilities/custom-phone-input";
import { CruiseEnquiryFormBuilder } from "@/app/resources/utils/formbuilder";

import CrossIcon from "@/Icons/cross-small.svg";
import styles from "./cruise-enquiry.module.scss";

export const HolidayEnquirySchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters."),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters."),
  residence_country: Yup.string().required("Country of residence is required"),
  nationality: Yup.string().required("Nationality is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  phone: Yup.string().required("Phone number is required"),
  customer_type: Yup.string().required("Customer type is required"),
  company: Yup.string().nullable().optional(),
  residence: Yup.string().nullable().optional(),
  from_date: Yup.string().required("From date is required"),
  to_date: Yup.string().required("To date is required"),
  destination: Yup.string().nullable().optional(),
  package_name: Yup.string().required("Package name is required"),
  budget: Yup.string().nullable().optional(),
  adults: Yup.number().min(1, "Minimum 1 adult is required").required(),
  children: Yup.number().min(0).optional(),
  infants: Yup.number().min(0).optional(),
  description: Yup.string().nullable().optional(),
});

const CruiseEnquiryForm = ({ isOpen, onClose, cruise }) => {
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(HolidayEnquirySchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      residence_country: "",
      nationality: "",
      email: "",
      phone: "",
      customer_type: "",
      company: "",
      residence: "",
      from_date: "",
      to_date: "",
      destination: cruise?.departure || cruise?.highlights?.[0] || "",
      package_name: cruise?.name || "",
      budget: "",
      adults: 1,
      children: 0,
      infants: 0,
      description: "",
    },
  });

  const adultsCount = watch("adults") || 1;
  const childrenCount = watch("children") || 0;
  const infantsCount = watch("infants") || 0;

  // Prefill fields when cruise changes or modal opens
  useEffect(() => {
    if (isOpen && cruise) {
      if (cruise.name) {
        setValue("package_name", cruise.name);
      }
      if (cruise.departure || cruise.highlights?.[0]) {
        setValue("destination", cruise.departure || cruise.highlights?.[0]);
      }
    }
  }, [isOpen, cruise, setValue]);

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

  const fields = CruiseEnquiryFormBuilder(control, styles, setValue);

  const onSubmit = (data) => {
    console.log("Holiday/Cruise Enquiry Submitted Data:", data);
    toast.success("Cruise enquiry submitted successfully!");
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
          <h2 className={styles.enquiry_title}>Cruise Enquiry Form</h2>
          <div className={styles.enquiry_close} onClick={onClose}>
            <CrossIcon />
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.enquiry_form}>
          {/* Top Row: Personal, Contact, Travel info cards */}
          <div className={styles.cards_grid}>
            {/* Personal Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Personal Information</h3>
              <div className={styles.fields_grid}>
                {fields.personalInfo.map((field) => renderField(field))}
              </div>
            </div>

            {/* Contact Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Contact Information</h3>
              <div className={styles.fields_grid}>
                {fields.contactInfo.map((field) => renderField(field))}
              </div>
            </div>

            {/* Travel Information */}
            <div className={styles.card_section}>
              <h3 className={styles.section_title}>Travel Information</h3>
              <div className={styles.fields_grid}>
                {fields.travelInfo.map((field) => renderField(field))}
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

                {/* Number of Infants */}
                <div className={styles.counter_group}>
                  <label className={styles.counter_label}>
                    Number of Infants
                  </label>
                  <div className={styles.counter_controls}>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      disabled={infantsCount <= 0}
                      onClick={() =>
                        setValue("infants", Math.max(0, infantsCount - 1))
                      }
                    >
                      -
                    </button>
                    <span className={styles.counter_value}>{infantsCount}</span>
                    <button
                      type="button"
                      className={styles.counter_btn}
                      onClick={() => setValue("infants", infantsCount + 1)}
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

export default CruiseEnquiryForm;
