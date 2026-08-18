import * as yup from "yup";

export const VisaEnquirySchema = yup.object().shape({
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
